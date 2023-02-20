export class Item {
  item_name?: string;
  items_count?: string;
  id?: string;

  constructor(data: any) {
    Object.assign(this, data);
  }
}
