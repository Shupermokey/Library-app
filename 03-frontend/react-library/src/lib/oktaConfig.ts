export const oktaConfig = {


    clientId: '0oaagpl0hph53rXLv5d7',
    issuer: 'https://dev-64970483.okta.com/oauth2/default',
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid', 'profile','email'],
    pkce: true,
    disableHttpsCheck: true,

}