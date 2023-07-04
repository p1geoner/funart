import { CategoryStore } from "./storeList/CategoryStore.js";
import { PaginationStore } from "./storeList/PaginationStore.js";
class Store {
  constructor() {
    this.categories = new CategoryStore();
    this.pagination = new PaginationStore();
  }
}
const store = new Store();
export default store;
