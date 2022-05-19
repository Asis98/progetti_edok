import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  providers: [Product]
})
export class ItemComponent {

  @Input public stock: Product;
  constructor() {
   }

  toggleFavorite(event: any){
    console.log('We are toggling the favorite state for this stock!', event);
    this.stock.favorite= !this.stock.favorite;
  }



}
