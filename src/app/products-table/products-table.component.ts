import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css'
})
export class ProductsTableComponent implements OnInit {
  products: Product[] = [];

    constructor(private service: ProductService,
                private router: Router){}

  ngOnInit(): void {
     this.loadProducts();
  }

  loadProducts() {
      this.service.getProducts().subscribe({
        next: data => this.products = data
       }
      );
  }
   delete(Product: Product){
    this.service.delete(Product).subscribe({
      next: () => this.loadProducts()
    })
   }
   create (){
    this.router.navigate(['product'])
   }
}

