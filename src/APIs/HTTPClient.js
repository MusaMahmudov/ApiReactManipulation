import axios from "axios";
import React from "react";

export class HTTPClient {
  BaseUrl;
  constructor(BaseUrl) {
    this.BaseUrl = BaseUrl;
  }
  async get(endPoint) {
    return await axios.get(`${this.BaseUrl}/${endPoint}`);
  }
  async post(endPoint, bodyRequest) {
    return await axios.post(`${this.BaseUrl}/${endPoint}`, bodyRequest);
  }
  async put(endPoint, id, bodyRequest) {
    return await axios.put(`${this.BaseUrl}/${endPoint}/${id}`, bodyRequest);
  }
  async patch(endPoint, id, bodyRequest) {
    return await axios.patch(`${this.BaseUrl}/${endPoint}/${id}`, bodyRequest);
  }
  async delete(endPoint, id) {
    return await axios.delete(`${this.BaseUrl}/${endPoint}?id=${id}`);
  }
}
