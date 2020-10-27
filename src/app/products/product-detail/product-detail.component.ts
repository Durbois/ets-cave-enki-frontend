import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less']
})
export class ProductDetailComponent implements OnInit {
  id: string;
  product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    console.log('ID: ' + this.id);
    this.getProductById(this.id);
  }

  getProductById(id: string): void {
    this.productService.findProductById(id)
    .subscribe(product => {
      this.product = product;
    }, (err) => {
      console.log(err);
    });

  }

}
