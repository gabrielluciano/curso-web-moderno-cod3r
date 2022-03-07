import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from './product.model';
import { catchError, EMPTY, map, Observable } from 'rxjs';

import { environment as env } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private snackBar;

  constructor(
    snackBar: MatSnackBar,
    private http: HttpClient  
  ) {
    this.snackBar = snackBar;
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: [isError ? 'msg-error' : 'msg-success']
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(`${env.baseApiUrl}/products`, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(`${env.baseApiUrl}/products`).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  readById(id: number): Observable<Product> {
    const url = `${env.baseApiUrl}/products/${id}`
    return this.http.get<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(product: Product): Observable<Product> {
    const url = `${env.baseApiUrl}/products/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: number): Observable<Product> {
    const url = `${env.baseApiUrl}/products/${id}`
    return this.http.delete<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY
  }
}