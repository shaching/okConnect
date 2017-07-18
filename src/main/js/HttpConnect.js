import is from 'is_js';
import HttpStatus from './HttpStatus';

export default class HttpConnect {

    constructor(headers, baseUrl) {
        if (this.constructor === HttpConnect) {
            throw new TypeError('Can not new abstract class.');
        }
        this.headers = headers;
        this.baseUrl = baseUrl;
    }

    post(apiName, bodyData) {
        if (is.json(bodyData)) {
            const request = {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify(bodyData)
            };
            return this.call(`${this.baseUrl}${apiName}`, request);
        }

        const request = {
            method: 'POST',
            headers: this.headers,
            body: bodyData
        };
        return this.call(`${this.baseUrl}${apiName}`, request);
    }

    get(apiName) {
        const request = {
            method: 'GET',
            headers: this.headers
        };
        return this.call(`${this.baseUrl}${apiName}`, request);
    }

    delete(apiName) {
        const request = {
            method: 'DELETE',
            headers: this.headers
        };
        return this.call(`${this.baseUrl}${apiName}`, request);
    }

    put(apiName, bodyData) {
        const request = {
            method: 'PUT',
            headers: this.headers,
            body: JSON.stringify(bodyData)
        };
        return this.call(`${this.baseUrl}${apiName}`, request);
    }

    async call(apiUrl, request) {
        HttpStatus.statusCode = '';
        const response = await fetch(apiUrl, request);

        /**
         * https://stackoverflow.com/questions/37280029
         */
        if (response.ok) {
            return response.json().catch((error) => {
                return {};
            });
        }

        HttpStatus.statusCode = response.status;
        throw Error(response.statusText);
    }
}
