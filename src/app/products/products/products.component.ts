import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  toppings = new FormControl();
  toppingList: string[] = ['WHISKY', 'RED_WINE', 'WHITE_WINE'];

  products: Product[];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.findAllProducts().subscribe(products => {
      console.log('Products: ' + JSON.stringify(products));
      this.products = products;
    }, (err) => {
      console.log('ERR: ' + err);
    }
   );
  }
}
