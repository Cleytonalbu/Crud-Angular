import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackbar: MatSnackBar) { }

  showMessage(mensagem: string): void {
    this.snackbar.open(mensagem, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
}
