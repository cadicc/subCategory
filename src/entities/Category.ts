import { SubCategory } from "./SubCategory";

export class Category {
  category_name?: string;
  product_count?: string;
  id?: string;
  category_level?: string;
  sub_category?: SubCategory[];

  constructor(data: any) {
    Object.assign(this, data);
  }
}
