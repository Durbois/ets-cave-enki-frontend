import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  }

  getProducts(): void {
    this.productService.findAllProducts().subscribe(products => {
      console.log('Products: ' + products);
      this.products = products;
    }, (err) => {
      console.log(err);
    }
   );
  }
}
