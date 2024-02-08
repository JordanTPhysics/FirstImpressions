
from flask import Flask, request, jsonify, make_response
import jwt, datetime, os
from flask_mysqldb import MySQL
from auth import validate
from auth import access
from flask_cors import CORS

server = Flask(__name__)

mysql = MySQL(server)
CORS(server, supports_credentials=True)

server.config['MYSQL_HOST'] = os.environ.get('MYSQL_HOST')
server.config['MYSQL_USER'] = os.environ.get('MYSQL_USER')
server.config['MYSQL_PASSWORD'] = os.environ.get('MYSQL_PASSWORD')
server.config['MYSQL_DB'] = os.environ.get('MYSQL_DB')
server.config['MYSQL_PORT'] = os.environ.get('MYSQL_PORT')

server.config['MYSQL_HOST'] = 'localhost'
server.config['MYSQL_USER'] = 'auth'
server.config['MYSQL_PASSWORD'] = 'auth123'
server.config['MYSQL_DB'] = 'auth'
server.config['MYSQL_PORT'] = 3306

def createJWT(username, secret, authz):
    return jwt.encode(
        {'user': username, 
        'exp': datetime.datetime.utcnow() + datetime.timedelta(days=30),
        "iat": datetime.datetime.utcnow(),
        "admin": authz},
        secret,
        algorithm='HS256') 
    

@server.route('/login', methods=['POST'])
def login():

    auth = request.authorization
    print(auth)
    if not auth:
        return 'Missing Credentials', 401, {'WWW-Authenticate': 'Basic realm="Login Required"'}

    cur = mysql.connection.cursor()
    res = cur.execute("SELECT * FROM users WHERE username=%s", (auth.username,))

    if res > 0:
        user_row = cur.fetchone()
        username = user_row[0]
        password = user_row[1]
        print(username, password)
        if cur.state == 'open':
            cur.close()
        if auth.username == username and auth.password == password:
            return createJWT(auth.username, os.environ.get('JWT_SECRET')), 200
        else:
            return "Invalid credentials", 401
    else:
        return "User not found", 404

@server.route('/post', methods=['POST'])
def create_post():
    post_data = request.get_json()
    post_template = post_data.get('template')


    return 'Post created successfully'

@server.route('/callback')
def callback():
    authorization_code = request.args.get('code')
    
    

    return f"Authorization Code: {authorization_code}"



@server.route('/valdiation', methods=['POST'])
def validate_token():
    token = request.headers.get('Authorization')
    if not token:
        return "Missing token", 401
    elif token.startswith('Bearer '):
            token = token[7:]


    try:
        jwt.decode(token, os.environ.get('JWT_SECRET'))
        return jsonify({'message': 'Valid token'}), 200
    except:
        return jsonify({'message': 'Invalid token'}), 403

if __name__ == '__main__':
    server.run(port=5000, host="0.0.0.0")
