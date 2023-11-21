import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../products.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

    if (id !== null) {
      this.productService.readById(id).subscribe(product => {
        console.log(product)
        this.product = product
      })
    } else {
      console.error('Id Invalido')
    }
  }
  delete(): void {
    this.productService.delete(this.product).subscribe(() => {
      this.productService.showMessage("Produto deletado.")
      this.router.navigate(['/products'])

    })


  }
}
