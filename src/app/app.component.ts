import { Component } from '@angular/core';
import { Product } from './Product';
import { ProductService } from './Product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dependency-injection';
  products!: Product[];

  constructor(private productService: ProductService) {}

  getProducts() {
    this.products = this.productService.getProducts();
  }
}
