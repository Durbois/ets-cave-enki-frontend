import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';
import { FormControl } from '@angular/forms';
import { isEmpty } from 'rxjs/operators';
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  toppings = new FormControl();
  productTypes: string[];
  toppingList: any[] = [
    {value: 'WHISKY'},
    {value: 'RED_WINE'},
    {value: 'WHITE_WINE'}];

  products: Product[];

  constructor(private productService: ProductsService, private languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.languageService.initialize();
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
