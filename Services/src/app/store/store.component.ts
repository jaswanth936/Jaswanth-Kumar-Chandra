import { Component, OnInit } from '@angular/core';
import { Item } from '../services/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'store-app',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  storeItems: Item[] = [];
  constructor(private itemService: ItemService) { }
  getStoreItems(): void {
    this.storeItems = this.itemService.getItems();
  }
  ngOnInit(): void {
      this.getStoreItems();
  }
  addItemInCart(id: number): void {
    this.itemService.addItem(id);
  }
}
