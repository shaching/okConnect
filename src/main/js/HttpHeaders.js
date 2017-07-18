export default class HttpHeaders {
    constructor() {
        if (this.constructor === HttpHeaders) {
            throw new TypeError('Can not new abstract class.');
        }
    }

    getJsonContentType() {
        return {
            'Content-Type': 'application/json;charset=UTF-8',
        };
    }

    getJsonContentType(key, value) {
        return {
            'Content-Type': 'application/json;charset=UTF-8',
            [key]: value
        };
    }

    getJsonContentType(key1, value1, key2, value2) {
        return {
            'Content-Type': 'application/json;charset=UTF-8',
            [key1]: value1,
            [key2]: value2,
        };
    }
}
