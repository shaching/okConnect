export default class WebSocketConnect {
  constructor(baseUrl) {
    if (this.constructor === WebSocketConnect) {
      throw new TypeError('Can not new abstract class.');
    }
    this.baseUrl = baseUrl;
  }

  connect(endPoint) {
    return new WebSocket(`${this.baseUrl}${endPoint}`);
  }
}
