import { Item } from "./Item";

export class SubList {
  category_name?: string;
  product_count?: string;
  id?: string;
  category_level?: string;
  items?: Item[];

  constructor(data: any) {
    Object.assign(this, data);
  }
}
