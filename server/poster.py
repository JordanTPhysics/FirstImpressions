
import requests
import os

# Set your Facebook App credentials and user credentials as environment variables


app_id = '655489229927403' #os.environ.get('FB_APP_ID')
app_secret = os.environ.get('FB_APP_SECRET')
username = os.environ.get('FB_USERNAME')
password = os.environ.get('FB_PASSWORD')

redirect_uri = os.environ.get('FB_REDIRECT_URI')  # Specify the redirect URI you set up in the app dashboard

# Step 1: Get User Access Token using Authorization Code
def get_user_access_token(code):
    url = f'https://graph.facebook.com/v12.0/oauth/access_token'
    params = {
        'client_id': app_id,
        'client_secret': app_secret,
        'redirect_uri': redirect_uri,
        'code': code,
    }

    response = requests.get(url, params=params)
    data = response.json()

    if 'access_token' in data:
        return data['access_token']
    else:
        print(f"Error: {data}")
        return None

# Step 2: Use User Access Token to make a post
def post_to_facebook(message):
    access_token = get_user_access_token('YOUR_AUTHORIZATION_CODE')

    if access_token:
        post_url = f'https://graph.facebook.com/v12.0/me/feed'
        post_data = {'access_token': access_token, 'message': message}

        response = requests.post(post_url, data=post_data)
        result = response.json()

        if 'id' in result:
            print(f"Post successful! Post ID: {result['id']}")
        else:
            print(f"Error: {result}")
    else:
        print("Unable to obtain user access token.")

# Example usage
post_message = "Hello, Facebook! This is an automated post."
post_to_facebook(post_message)
