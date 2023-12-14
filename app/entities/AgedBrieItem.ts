import { Item } from "./item";

export class AgedBrieItem extends Item {
  updateQuality() {
    this.sellIn = this.sellIn - 1;

    if (this.quality < 50) {
      this.quality = this.quality + 1;
    }

    if (this.quality < 50 && this.sellIn < 0) {
      this.quality = this.quality + 1;
    }
  }
}
