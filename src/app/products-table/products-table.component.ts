import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css'
})
export class ProductsTableComponent implements OnInit {
  products: Product[] = [];

    constructor(private service: ProductService){}
  ngOnInit(): void {
    this.ngOnInit();{
      this.loadProducts();
    }

  }
  loadProducts() {
      this.service.getProducts().subscribe({
        next: data => this.products = data
       }
      );
  }

}

