
import { ProductService } from './../product.service';
import { Product } from './../products.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = []

  displayedColumns = ['id', 'name', 'price']

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe((products: Product[]) => {
      this.products = products
    })
  }
}
