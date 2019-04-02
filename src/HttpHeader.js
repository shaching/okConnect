export default class HttpHeader {
  constructor(builder) {
    this.header = {};

    if (builder.noCacheControl !== 'undefined') {
      this.header['Cache-Control'] = builder.noCacheControl;
    }

    if (builder.jsonContentType !== 'undefined') {
      this.header['Content-Type'] = builder.jsonContentType;
    }

    if (builder.xWwwFormUrlencodedContentType !== 'undefined') {
      this.header['Content-Type'] = builder.xWwwFormUrlencodedContentType;
    }

    if (builder.jwtAuthorization !== 'undefined') {
      this.header.Authorization = builder.jwtAuthorization;
    }
  }

  getHeader() {
    return this.header;
  }

  static get Builder() {
    class Builder {
      setNoCacheControl() {
        this.noCacheControl = 'no-cache';
        return this;
      }

      setJsonContentType() {
        this.jsonContentType = 'application/json;charset=utf-8';
        return this;
      }

      setXWwwFormUrlencodedContentType() {
        this.xWwwFormUrlencodedContentType = 'application/x-www-form-urlencoded;charset=utf-8';
        return this;
      }

      setJwtAuthorization(val) {
        this.jwtAuthorization = `Bearer ${val}`;
        return this;
      }

      build() {
        return new HttpHeader(this);
      }
    }

    return Builder;
  }
}
