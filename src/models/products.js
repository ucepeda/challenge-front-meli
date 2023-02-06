import { Request } from "../services/request.js";

export class Products extends Request {
  constructor() {
    super();
  }
  async list(query) {
    return await this.get(`/sites/MLA/search?q=${query}&limit=4`);
  }

  async single(prodId) {
    return await this.get(`items/${prodId}`);
  }
  
  async singleDescription(prodId) {
    return await this.get(`items/${prodId}/description`);
  }
}
