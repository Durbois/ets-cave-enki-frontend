import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobsOfferComponent } from './jobs-offer/jobs-offer.component';
import { PresentationComponent } from './presentation/presentation.component';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'jobs',
    component: JobsOfferComponent
  },
  {
    path: 'home',
    component: PresentationComponent
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
