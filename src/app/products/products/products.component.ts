import { Component, OnInit } from '@angular/core';
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
    let selection: string = this.toppings.value.toString();

    if (selection !== '') {
      selection = 'productTypes='.concat(selection.split(',').join('&productTypes='));
      console.log('Selection: ' + selection);
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
