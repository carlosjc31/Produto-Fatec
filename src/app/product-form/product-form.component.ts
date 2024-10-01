import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Form, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit{

  formGroupProduct: FormGroup;
  isEditing = false;

  constructor(private router: Router,
              private activeRouter: ActivatedRoute,
              private service: ProductService,
              private FormBuilder: FormBuilder
            ){
    this.formGroupProduct = FormBuilder.group({
      id      : [''],
      name    : [''],
      price   : [''],
      category: ['']
    })
  }
  ngOnInit()  {
    const id = Number(this.activeRouter.snapshot.paramMap.get("id"));
    if(id != 0){
      this.isEditing=true;
    this.loadProduct(id);
    }
  }
loadProduct(id: number){
  this.service.getProductById(id).subscribe({
    next: data => this.formGroupProduct.setValue(data)
  });
}
update(){
  this.service.update(this.formGroupProduct.value).subscribe({
    next: () => this.router.navigate(['products'])
  })
}
save(){
  this.service.save(this.formGroupProduct.value).subscribe({
    next: () => this.router.navigate(['products'])
  })
}
}

