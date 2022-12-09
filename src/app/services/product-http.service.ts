import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateProduct, ProductModel, UpdateProduct } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProducthttpService {
readonly  API_URL:string = "httpClient://api.escuelajs.co/api/v1/products";

  constructor(private httpClient: HttpClient) {}


  getAll() {
    return this.httpClient.get(this.API_URL)
  }

  getOne(id:number) {
    const url = `$(this.API_URL)/${id}`;
   return this.httpClient.get(url)
  }


  store(product:CreateProduct) {
    const data = {

      title: "Titulo",
      price: 55.60,
      description: "Esfero-Brayan Ganan",
      images: ["asdfa"],
      categoryId: 1
    }
    const url = `${this.API_URL}`;
    return this.httpClient.post(url,product)
  }

  update(id:number,product:UpdateProduct) {
    const data = {
      title: "Titulo",
      price: 55.60,
      description: "Esfero Brayan Ganan actualizado",
      images: ["asdfa"],
      categoryId: 1
    }
    const url = `${this.API_URL}`;
    return this.httpClient.put(url, product)
  }

  destroy(id:number) {
    const url = `$(this.API_URL)/${id}`;
    return this.httpClient.delete(url)

  }


}
