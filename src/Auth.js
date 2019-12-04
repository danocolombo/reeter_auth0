import auth0 from "auth0-js";
 export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: "dev-usiqk6y8.auth0.com",
        clientID: "mLgQvemwJcF9LWvsPx5PW7Q9rOi3vOt3",
        redirectUri: "http://localhost:3000/callback",
        audience: "https://dev-usiqk6y8.auth0.com/userinfo",
        responseType: "token id_token",
        scope: "openid"
    });
    constructor() {
        this.login = this.login.bind(this);
    }

    login(){
        this.auth0.authorize();
    }
 }