import {CategoryModel} from "./category.interface"

export interface ProductModel {

id: number,
title: string,
price: number,
description: string,
images:string[],
category:CategoryModel

}
export interface CreateProduct extends Omit<ProductModel,'id'|'category'>{
    categoryId:number;
}
export interface UpdateProduct extends Omit<ProductModel,'id'|'category'>{
    categoryId:number;
}