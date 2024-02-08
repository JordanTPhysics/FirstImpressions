import facebook
import os

# Set your Facebook App credentials and user access token as environment variables
app_id = os.environ.get('FB_APP_ID')
app_secret = os.environ.get('FB_APP_SECRET')
user_access_token = "os.environ.get('USER_ACCESS_TOKEN')"

# Create a Graph API object
graph = facebook.GraphAPI(access_token=user_access_token)

# Example: Post a message to the user's feed
post_message = "Hello, Facebook! This is an automated post."

try:
    # Post to the user's feed
    graph.put_object(parent_object='me', connection_name='feed', message=post_message)
    print("Post successful!")
except facebook.GraphAPIError as e:
    print(f"Error: {e}")
