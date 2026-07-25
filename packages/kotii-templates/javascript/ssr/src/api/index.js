import {appApi} from "lanzii"
import { CONFIG } from "Config";
let API = null

 const runOnService = (config) => {
  // console.log('RUN ON SERVICE IS CALLED', config);
  
  console.log("Request is being made to the server",config)
  return config
};

const appApiConfig = (base, token = null) => ({
  base,
  withCredentials: true,
  credentials: 'same-origin',
  crossdomain: true,
  mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: token
      ? token
      : 'Bearer 85a40139-49c3-b0ce-437d-da2a8c0a66d0',
   
  },
})


const apiService = (service, runOnRequest = null) => {
  if (!runOnRequest) {
    return appApi.createApiService(appApiConfig(service));
  }
  return appApi.createApiService(appApiConfig(service), runOnRequest);
};

const createApiServices = (servicesConfig) => {
  // console.log('THE SERVICES CONFIG', servicesConfig);

//   const auth = apiService(servicesConfig.endpoints?.auth, 'auth');
//   const profile = apiService(servicesConfig.endpoints?.profile, runOnService);
//   const shop = apiService(servicesConfig.endpoints?.shop, runOnService);
//   const balances = apiService(servicesConfig.endpoints?.balance, runOnService);

//   const subscriptions = apiService(
//     servicesConfig.endpoints?.subscriptions ||
//       servicesConfig.endpoints?.subcscriptions,
//     runOnService,
//   );
//   const products = apiService(servicesConfig.endpoints?.product, runOnService);

  console.log("THE APP CONFIG",CONFIG)
  const core = apiService(CONFIG.APP_URL, runOnService);
  console.log("THE API SERVICE", core)

  // const auth = apiService(`${servicesConfig.endpoints?.auth}/`);
  // const profile = apiService(`${servicesConfig.endpoints?.profile}/`);
  // const shop = apiService(`${servicesConfig.endpoints?.shop}`);
  // const balances = apiService(`${servicesConfig.endpoints?.balance}`);
  return {
   core:core
  };
};
API = createApiServices()
export{
  apiService,
  createApiServices,
  API
}

