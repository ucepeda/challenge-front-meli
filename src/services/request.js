import fetch from "isomorphic-fetch";
import { BASE_URL } from "../utils/constants";

export class Request {
  async get(endpoint) {
    try {
      const data = await fetch(`${BASE_URL}/${endpoint}`);
      return await data.json();
    } catch (e) {
      throw e;
    }
  }
}
