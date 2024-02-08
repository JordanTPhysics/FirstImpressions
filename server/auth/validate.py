import os, requests

def token(request):
    token = request.headers.get('Authorization')
    if not token:
        return None, ("Missing token", 401)
    elif token.startswith('Bearer '):
            token = token[7:]

    res = requests.post(f'http://{os.environ.get("AUTH_SVC_ADDRESS")}/validation', headers={'Authorization': f'Bearer {token}'})

    if res.status_code == 200:
        return res.text
    else:
        return None, (res.text, res.status_code)