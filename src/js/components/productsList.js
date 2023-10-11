import products from "../views/products";

class ProductsList extends HTMLElement {
    constructor() {
        super();

        fetch('https://dummyjson.com/products?limit=10')
            .then(response => response.json())
            //.then(console.log)
            .then(dataProducts => {
                let resultsProducts = dataProducts.products
                console.log(resultsProducts)
                let productsLength = resultsProducts.length
                let productsDiv = "";
                for (let i = 0; i < productsLength; i++) {
                    // console.log(resultsProducts[i])
                    productsDiv += `
                            <div class="col-md-4 mb-3">
                                <div class="card p-2">
                                    <img src="${resultsProducts[i].images[0]}" alt="${resultsProducts[i].title}">
                                    <h3>${resultsProducts[i].title}</h3>
                                    <p>${resultsProducts[i].description}<p>        
                                </div>
                            </div>
                    `
                }
                let formDiv = `
                <div class="container">
                        <div class="row">
                                ${productsDiv}
                        </div>
                    </div>
                `
                this.innerHTML = formDiv
            });


    }
}

export default () => /*html*/`
        <h1>Products</h1>
    `;

customElements.define("products-list", ProductsList);



/* Correction en cours
// Display Products from DummyJSON
class ProductsList extends HTMLElement {
    constructor() {
        super();            // Always call super first in constructor to access functions of the parent Object
        
        async function getProducts() {
            let response = await fetch('https://dummyjson.com/products?limit=10');
            let data = await response.json();
            return data;
        }
        getProducts().then(data => {
            let products = data.products;
            let htmlToDisplay = '';
            products.forEach(product => {
                htmlToDisplay += `
                    <div class="card">
                        <img src="${product.images[0]}" alt="${product.title}">
                        <h3>${product.title}</h3>
                        <p>${product.description}</p>
                    </div>
                `;
            });
            this.innerHTML = htmlToDisplay;
        });



    }
}
customElements.define("products-list", ProductsList);*/



/* productsList-simple.js
@@ -0,0 +1,25 @@

// Display Products from DummyJSON
class ProductsList extends HTMLElement {
    constructor() {
        super();            // Always call super first in constructor to access functions of the parent Object

        fetch('https://dummyjson.com/products?limit=10') // récupérer la data
        .then(response => response.json())                                      // convertir la data en json
        .then(data => {  
            let products = data.products;
            let htmlToDisplay = '';
            products.forEach(product => {
                htmlToDisplay += `
                    <div class="card">
                        <img src="${product.images[0]}" alt="${product.title}">
                        <h3>${product.title}</h3>
                        <p>${product.description}</p>
                    </div>
                `;
            });
            this.innerHTML = htmlToDisplay;
        })                                                   // utiliser la data
    }
}
customElements.define("products-list", ProductsList);*/