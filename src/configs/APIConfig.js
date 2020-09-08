const BASE_URL = "https://picsum.photos/list";
// const BASE_URL = "http://picsum.photos/0/400/600";//?image=0";
export class ApiConfig {
  baseURL = null;
  timeout = 5000;

  constructor(base_url) {
    this.baseURL = base_url;
  }

  getConfig = () => ({
    baseURL: this.baseURL,
    method: this.method,
    headers: this.headers,
    timeout: this.timeout,
    body: this.body,
  });
}

export const headers = {
  withoutToken: () => ({
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  })
};

export const APIConfig = () => {
  let baseURL = BASE_URL;
  return new ApiConfig(baseURL).getConfig();
};
