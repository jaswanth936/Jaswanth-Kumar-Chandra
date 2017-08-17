import { Injectable } from '@angular/core';
import { Item } from './item';
import { ITEMS } from './mock-items';

@Injectable()
export class ItemService {
    selectedItems: Item[] = [];
  getItems(): Item[] {
    return ITEMS;
  }
  getSelectedItems(): Item[] {
    return this.selectedItems;
  }
  addItem(id: number): void {
    const item = ITEMS.find(ob => ob.id === id);
    if (this.selectedItems.indexOf(item) < 0) {
      this.selectedItems.push(item);
    }
  }
  removeItem(id: number): void {
    const item = this.selectedItems.find(ob => ob.id === id);
    const itemIndex = this.selectedItems.indexOf(item);
    this.selectedItems.splice(itemIndex, 1);
  }
}
