import { Products } from "../models/products";
import { Categories } from "../models/categories";
import { NAME, LASTNAME } from "../../utils/constants";
/* Service models */
import { Author } from "../models/author";
import { filterToCategories } from "../categories.js";
import { sendProducts, sendProduct } from "../products.js"

const { info: author } = new Author(NAME, LASTNAME);
const products = new Products();
export class Search {
  // get by name
  async products(name) {
    try {
      const { results, filters } = await products.list(name);
      const items = sendProducts(results);
      const categories = filterToCategories(filters);
      return { author, items, categories };
    } catch (e) {
      console.error(e);
    }
  }

  // get by id
  async product(id) {
    try {
      const product = await products.single(id);
      const { category_id } = product;
      const categories = await this.productCategory(category_id);
      const { plain_text: description } = await products.singleDescription(id);
      const obj = { product, description, categories };
      const item = sendProduct(obj);
      return item;
    } catch (e) {
      console.error(e);
    }
  }

  async productCategory(category_id) {
    try {
      // filter categories
      const categories = new Categories();
      const { path_from_root } = await categories.single(category_id);
      return filterToCategories(path_from_root);
    } catch (e) {
      throw e;
    }
  }
}
