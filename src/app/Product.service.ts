import {  Injectable } from "@angular/core";
import { Product } from "./Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public getProducts() {
    let products: Product[];

    products = [
      new Product(1, "Memory Card", 500),
      new Product(1, "Pen Drive", 750),
      new Product(1, "Power Bank", 100)
    ];

    return products;
  }
}


