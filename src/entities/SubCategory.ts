import { SubList } from "./SubList";

export class SubCategory {
  category_name?: string;
  product_count?: string;
  id?: string;
  category_level?: string;
  sub_list?: SubList[];

  constructor(data: any) {
    Object.assign(this, data);
  }
}
