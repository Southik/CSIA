import Commerce from '@chec/commerce.js';
export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true); // gets the the public key vaue from .env (connect with API)
