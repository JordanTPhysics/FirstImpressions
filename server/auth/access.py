import os, requests

def login(request):
    auth = request.authorization
    if not auth:
        return None, ('Missing Credentials', 401, {'WWW-Authenticate': 'Basic realm="Login Required"'})
        
    basicAuth = (auth.username, auth.password)
    res = requests.post(f'http://{os.environ.get('AUTH_SVC_ADDRESS')}/login', auth=basicAuth)

    if res.status_code == 200:
        return res.text
    else:
        return res.text, res.status_code