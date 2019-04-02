import is from 'is_js';

export default class HttpConnect {
  constructor(headers, baseUrl) {
    if (this.constructor === HttpConnect) {
      throw new TypeError('Can not new abstract class.');
    }
    this.headers = headers;
    this.baseUrl = baseUrl;
  }

  post(apiName, bodyData) {
    const config = {
      url: `${this.baseUrl}${apiName}`,
      request: {
        method: 'POST',
        headers: this.headers,
        body: is.json(bodyData) ? JSON.stringify(bodyData) : bodyData,
      },
    };
    return this.call(config);
  }

  get(apiName) {
    const config = {
      url: `${this.baseUrl}${apiName}`,
      request: {
        method: 'GET',
        headers: this.headers,
      },
    };
    return this.call(config);
  }

  delete(apiName) {
    const config = {
      url: `${this.baseUrl}${apiName}`,
      request: {
        method: 'DELETE',
        headers: this.headers,
      },
    };
    return this.call(config);
  }

  put(apiName, bodyData) {
    const config = {
      url: `${this.baseUrl}${apiName}`,
      request: {
        method: 'PUT',
        headers: this.headers,
        body: is.json(bodyData) ? JSON.stringify(bodyData) : bodyData,
      },
    };
    return this.call(config);
  }

  patch(apiName, bodyData) {
    const config = {
      url: `${this.baseUrl}${apiName}`,
      request: {
        method: 'PATCH',
        headers: this.headers,
        body: is.json(bodyData) ? JSON.stringify(bodyData) : bodyData,
      },
    };
    return this.call(config);
  }

  /* eslint-disable class-methods-use-this */
  call(config) {
    return fetch(config.url, config.request);
  }
}
