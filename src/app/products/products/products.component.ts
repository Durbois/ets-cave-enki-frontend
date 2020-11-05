import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';
import { FormControl } from '@angular/forms';
import { isEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  toppings = new FormControl();
  productTypes: string[];
  toppingList: any[] = [
    {value: 'WHISKY', viewValue: 'Whisky' },
    {value: 'RED_WINE', viewValue: 'Red wine'},
    {value: 'WHITE_WINE', viewValue: 'White wine'}];

  products: Product[];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  applyChangeDetection(): void {
    const selection: string = this.toppings.value.toString();

    if (selection !== '') {
      console.log('Selection: ' + selection);
      this.productService.findAllProducts(selection).subscribe(products => {
        console.log('Products: ' + JSON.stringify(products));
        this.products = products;
      }, (err) => {
        console.log('ERR: ' + err);
      }
     );
    } else {
      this.getProducts();
    }
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
