// import { create } from 'apisauce';
import { APIConfig, headers } from "./APIConfig";

// Use to call verios api from the application
export const ApiRequest = async (request) => {
  try {
    console.log("Api request - request : ", request);
    return await invokeAPI(APIConfig(), request);
  } catch (error) {
    console.log("error : ", error);
  }
};


// Used to call api verious place
const invokeAPI = async (apiconfig, request) => {
  const url = apiconfig.baseURL;// + request.endPoint;
  // const requestBody = request.body;
console.log(request," :: request -- url :: ", url);
  let apiResponse = await fetch(url, {
    method: 'GET',
    // headers: fetchedHeaders,
    // timeoutInterval: apiconfig.timeout,
    // responseType: 'arraybuffer',
    // body: requestBody,
  });

  const json = apiResponse.text();
  console.log(apiResponse.text()," : json :: ",json);
  return json;
};

export default ApiRequest;
