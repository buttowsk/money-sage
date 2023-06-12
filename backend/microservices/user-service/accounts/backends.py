from social_core.backends.oauth import BaseOAuth2

class CustomBaseGoogleAuth:
    def get_user_id(self, details, response):
        """Use google email as unique id"""
        if self.setting("USE_UNIQUE_USER_ID", False):
            if "sub" in response:
                return response["sub"]
            else:
                return response["id"]
        else:
            return details["email"]

    def get_user_details(self, response):
        """Return user details from Google API account"""
        email = response.get("email", "")

        name, given_name, family_name, picture = (
            response.get("name", ""),
            response.get("given_name", ""),
            response.get("family_name", ""),
            response.get("picture", ""),
        )

        fullname, first_name, last_name = self.get_user_names(
            name, given_name, family_name
        )
        return {
            "username": email.split("@", 1)[0],
            "email": email,
            "fullname": fullname,
            "first_name": first_name,
            "last_name": last_name,
            "picture": picture,
        }


class CustomBaseGoogleOAuth2API(CustomBaseGoogleAuth):
    def user_data(self, access_token, *args, **kwargs):
        """Return user data from Google API"""
        return self.get_json(
            "https://www.googleapis.com/oauth2/v3/userinfo",
            headers={
                "Authorization": "Bearer %s" % access_token,
            },
        )

    def revoke_token_params(self, token, uid):
        return {"token": token}

    def revoke_token_headers(self, token, uid):
        return {"Content-type": "application/json"}


class GoogleOAuth2(CustomBaseGoogleOAuth2API, BaseOAuth2):
    """Google OAuth2 authentication backend"""

    name = "google-oauth2"
    REDIRECT_STATE = False
    AUTHORIZATION_URL = "https://accounts.google.com/o/oauth2/auth"
    ACCESS_TOKEN_URL = "https://accounts.google.com/o/oauth2/token"
    ACCESS_TOKEN_METHOD = "POST"
    REVOKE_TOKEN_URL = "https://accounts.google.com/o/oauth2/revoke"
    REVOKE_TOKEN_METHOD = "GET"
    # The order of the default scope is important
    DEFAULT_SCOPE = ["openid", "email", "profile"]
    EXTRA_DATA = [
        ("refresh_token", "refresh_token", True),
        ("expires_in", "expires"),
        ("token_type", "token_type", True),
    ]
