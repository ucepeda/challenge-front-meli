import { Request } from "../services/request.js";

export class Categories extends Request {
  constructor() {
    super();
  }
  async single(id) {
    try {
      return await this.get(`categories/${id}`);
    } catch (e) {
      throw e;
    }
  }
}