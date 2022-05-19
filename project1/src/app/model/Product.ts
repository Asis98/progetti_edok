import { Injectable } from "@angular/core";

Injectable({providedIn: "root"})
export class Product {
    
    favorite: boolean = false;
   
    constructor(public name: string, public code: string, public price:number, public previousPrice : number)
    {

    }

    isPositiveChange(): boolean
    {
        return this.price >=this.previousPrice;
    }

    increaseValue()
    {
         this.price ++;
    }

    decreaseValue()
    {
         this.price --;
    }
}

