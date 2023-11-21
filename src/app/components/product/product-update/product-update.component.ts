import { Product } from './../products.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})


export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: "",
    price: null
  }


  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

    if (id !== null) {
      this.productService.readById(id).subscribe(product => {
        console.log(product)
        this.product = product
      })

    } else {
      console.error("Id invalido")
    }


  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Produto atualizado com sucesso")
      this.router.navigate(['/products'])
    })
  }
  cancel(): void {
    this.router.navigate(['/products'])
  }

  delete(): void{
    this.productService.delete(this.product).subscribe(()=> {
      this.productService.showMessage("Produto deletado.")
      this.router.navigate(['/products'])

    })

  }

}
