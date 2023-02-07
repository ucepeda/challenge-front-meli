import { Request } from "../request.js";
import { PRODUCTS_LIMIT } from "./../../utils/constants"

export class Products extends Request {
  constructor() {
    super();
  }
  async list(query) {
    return await this.get(`/sites/MLA/search?q=${query}&limit=${PRODUCTS_LIMIT}`);
  }

  async single(prodId) {
    return await this.get(`items/${prodId}`);
  }
  
  async singleDescription(prodId) {
    return await this.get(`items/${prodId}/description`);
  }
}
