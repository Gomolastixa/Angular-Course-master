import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable,catchError, tap, throwError, map } from "rxjs";
import { IProduct } from "./product";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class ProductService {

  private productUrl = 'api/products/products.json';

  constructor(private http: HttpClient) {

  }

  getProductById(id: number): Observable<IProduct | undefined> {
    return this.getProducts().pipe(
      map((products: IProduct[]) => products.find(p => p.productId == id))
    );
  }

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
          tap(data => console.log('All', JSON.stringify(data))),
          catchError(this.handleError)
        );

        // automatically maps the get response to an (observable) array of products              
    }

    private handleError(err: HttpErrorResponse) {
      let errorMessage = '';
      if(err.error instanceof ErrorEvent) {
        errorMessage = 'An error occured: ${err.error.message}';
      } else {
        errorMessage = 'Server returned code: ${err.status}, error message is: ${err.message}';
      }
      console.log(errorMessage);
      return throwError(() => errorMessage);
    }
}