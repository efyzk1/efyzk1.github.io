const openCart = document.querySelector(".cart__icon");
const closeCart = document.querySelector(".close__cart"); 
const productDOM = document.querySelector(".product__center");
const cartDOM = document.querySelector(".cart__center");



let cart = [];

let buttonDOM = [];

class UI {}

class Storage {}

class Products {
    async getProducts() {
        try {
          const results = await fetch("./products.json");
          const data =  await result.json();
    
          console.log(data);
        } catch (err) {
          console.log(err);
        }
      }
}

document.addEventListener("DOMContentLoaded", async () => {
    const ui = new UI();
    const products = new Products();
    

    const productsObj = await products.getProducts();
});