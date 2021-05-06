export const HOST = 'http://localhost:3000/';

const FACEBOOK_CLIENT_ID = '';
const GOOGLE_CLIENT_ID = '';
const VK_CLIENT_ID = '';

const REDIRECT_URI = `${HOST}connect`;

export const linkFacebook = `https://www.facebook.com/v6.0/dialog/oauth?client_id=${FACEBOOK_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=facebook&scope=email&response_type=code`;
export const linkGoogle = `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=google&scope=email&response_type=code`;
export const linkVK = `https://oauth.vk.com/authorize?client_id=${VK_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=vk&scope=email&response_type=code&display=page&v=5.103`;
