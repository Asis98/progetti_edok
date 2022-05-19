import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  //providers: [Project1]
})
export class ItemComponent implements OnInit {

  public stocks: Array<Product> = [];

  constructor() {
   }

  ngOnInit(): void {
    
    this.stocks = [
        new Product('Test Stock Company', 'TSC', 85,80),
        new Product('Second Stock Company', 'SSC', 10 ,20),
        new Product('Last Stock Company', 'LSC', 876 , 765)
    ];
  }

  toggleFavorite(event: any, index : number){
    console.log('We are toggling the favorite state for this stock!', event);
    this.stocks[index].favorite= !this.stocks[index].favorite;
  }

  trackStockByCode(index: number, stock: Product)
  {
    return stock.code;
  }

  

  

}
