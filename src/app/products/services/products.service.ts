import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Product } from '../models/product';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  PRODUCTS_API = `${environment.backend}/product`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public findAllProducts(requestParams ?: string): Observable<any> {
    let params = new HttpParams();

    if (requestParams !== undefined) {
      console.log('REQ: ' + requestParams);
      requestParams.split(',').forEach(req => {
        params = params.append('productTypes', req);
      });
    }

    console.log('Params: ' + JSON.stringify(params));

    return this.http.get<Product[]>(`${this.PRODUCTS_API}/all`, {params})
            .pipe(catchError(this.handleError));
  }

  public findProductById(id: string): Observable<any> {
    return this.http.get<Product>(`${this.PRODUCTS_API}/item/${id}`, this.httpOptions)
           .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
