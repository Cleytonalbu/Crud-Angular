import { Product } from './products.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackbar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(mensagem: string): void {
    this.snackbar.open(mensagem, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create (product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product)
  }
}
