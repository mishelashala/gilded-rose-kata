import { Item } from "./entities/item";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((_item, index) => {
      this.items[index].updateQuality();
    });

    return this.items;
  }
}
