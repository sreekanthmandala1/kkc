// import{ domain, clientId } from '../../auth_config.json';
// export const environment = {
//   production: false,
//   auth:{
//     domain,
//     clientId,
//     redirectUri:window.location.origin,
    
//   },
// }

import{ domain, clientId } from '../../auth_config.json';
export const Environment = {
  production: false,
  auth:{
    domain,
    clientId,
    redirectUri:window.location.origin,
    
  },
};



export const environment = {
  production: false,
  apiUrl: 'https://10clseinvoice.azurewebsites.net/',
  facebookAppId: '1222104044961812',
  auth:{
        domain,
        clientId,
        redirectUri:window.location.origin,
  }
};