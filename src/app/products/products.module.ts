import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../app-material.module';
import { TranslateModule, TranslateService, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';


@NgModule({
  declarations: [ProductsComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class ProductsModule { }
