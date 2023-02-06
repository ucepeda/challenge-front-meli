import { Request } from "../services/request.js";

export class Products extends Request {
  constructor() {
    super();
  }
  async list(query) {
    console.log(query);
    return await this.get(`/sites/MLA/search?q=${query}&limit=4`);
  }

  async single(prodId) {
    console.log(prodId);
    return await this.get(`items/${prodId}`);
  }
  
  async singleDescription(prodId) {
    return await this.get(`items/${prodId}/description`);
  }
}
