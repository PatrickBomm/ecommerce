import React from "react";
import { PRODUCTS } from '../../products'
import { Product } from './product'
import { Products } from "./shopStyle";

export const Shop = () => {
    return (
            <Products> {PRODUCTS.map((product) => (
                <Product data={product} />
            ))}
            </Products>
    )
}