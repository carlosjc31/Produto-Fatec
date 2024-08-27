import { Component } from '@angular/core';
import { Product } from '../product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: Product[] = [
    {"id": 1,
     "name"    : "Computador I7",
     "price"   :  6.000,
     "category": "Eletrônicos"
    },
    {"id"       : 2,
      "name"    : "Computador I5",
      "price"   : 5.200,
      "category": "Eletrônicos",
     },

     {"id"      : 3,
      "name"    : "Mouse",
      "price"   : 50,
      "category": "Eletrônicos",
     },

  ];

}
