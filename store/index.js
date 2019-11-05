import JWTDecode from "jwt-decode";
import cookieparser from "cookieparser";

export const actions = {
    nuxtServerInit({commit}, {req}) {
        // Ensure this is not a static site
        if(process.server && process.static) return;

        // Check to see if there is a cookie, if not then return
        if(!req.headers.cookie) return;

        // Given the top return, we will only hit this if there is a cookie
        const parsed = cookieparser.parse(req.headers.cookie);
        // Get the access Token
        const accessTokenCookie = parsed.access_token;

        // Check to see if we actually got the cookie
        if(!accessTokenCookie) return;

        // If there is a cookie then decode cookie
        const decoded = JWTDecode(accessTokenCookie)

        if(decoded) {
            commit("users/SET_USER", {
                uid: decoded.user_id,
                email: decoded.email
            })
        }
    }
}