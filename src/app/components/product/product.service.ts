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
  
  //Cria Produto
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }

  //Acessa lista de Produtos na API
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }

  //Buscar o dado pelo ID
  readById(id: string): Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }
  
  //Altera o dado pelo ID
  update(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }

  delete(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.delete<Product>(url)
  }



}