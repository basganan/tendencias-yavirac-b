import { Component, OnInit } from '@angular/core';
import { ProducthttpService } from 'src/app/services/product-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  constructor(private productHttpService: ProducthttpService) { }

  ngOnInit(): void {

    //this.getProducts()
    //this.getProduct()
    //this.ProductCreate()
   //this.ProductUpdate()
   //this.ProductDelete()


  }

  getProducts() {
    this.productHttpService.getAll().subscribe
      (res => {
        console.log(res)
      })
  }

  getProduct() {
   this.productHttpService.getOne(1).subscribe(res => {
      console.log(res)
    })
  }


  createProduct() {
    const product = {

      title: "Titulo",
      price: 55.60,
      description: "Esfero-Brayan Ganan",
      images: ["asdfa"],
      categoryId: 1,
    }
    return this.productHttpService.store().subscribe(res => {
      console.log(res)
    })
  }

  ProductUpdate() {
    const product = {
      title: "Titulo",
      price: 55.60,
      description: "Esfero Brayan Ganan actualizado",
      images: ["asdfa"],
      categoryId: 1
    }
    return this.productHttpService.update(2).subscribe(res => {
      console.log(res)
    })
  }

  ProductDelete() {
    this.productHttpService.destroy(3).subscribe
      (res => { console.log(res) })


  }




}


