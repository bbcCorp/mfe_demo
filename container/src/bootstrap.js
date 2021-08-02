import { mount as mountProducts } from 'productsMfe/ProductsIndex';
import { mount as mountCart } from 'cartMfe/ShowCart';

console.log('Container');

const el1 = document.querySelector('#product-mfe-container');
if(el1){
    mountProducts(el1);
}

const el2 = document.querySelector('#cart-mfe-container');
if(el2){
    mountCart(el2);
}