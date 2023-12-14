import { Item } from "./item";

export class BackstagePassItem extends Item {
  updateQuality() {
    if (this.quality < 50) {
      this.quality = this.quality + 1;

      if (this.quality < 50 && this.sellIn < 11) {
        this.quality = this.quality + 1;
      }

      if (this.quality < 50 && this.sellIn < 6) {
        this.quality = this.quality + 1;
      }
    }

    this.sellIn = this.sellIn - 1;

    if (this.sellIn < 0) {
      this.quality = 0;
    }
  }
}
