const API =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

class ProductsList {
  constructor(container = ".products") {
    this.container = container;
    this.goods = []; //массив товаров
    this.allProducts = []; //массив объектов
    this._getProducts().then((data) => {
      //data - объект js
      this.goods = [...data];
      this.render();
    });
  }
  _getProducts() {
    return fetch(`${API}/catalogData.json`)
      .then((result) => result.json())
      .catch((error) => {
        console.log(error);
      });
  }
  calcSum() {
    return this.allProducts.reduce((accum, item) => (accum += item.price), 0);
  }
  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const productObj = new ProductItem(product);
      this.allProducts.push(productObj);
      block.insertAdjacentHTML("beforeend", productObj.render());
    }
  }
}

class ProductItem {
  constructor(product, img = "https://placehold.it/200x150") {
    this.title = product.product_name;
    this.price = product.price;
    this.id = product.id_product;
    this.img = img;
  }
  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
  }
}

let list = new ProductsList();

class Cart {
  constructor(block = ".cart-block") {
    this.block = block;
    this.goods = [];
    this.allProducts = [];
    this._getBasket().then((data) => {
      this.goods = Object.keys(data);
      this.render();
    });
  }

  _getBasket() {
    return fetch(`${API}/getBasket.json`)
      .then((result) => result.json())
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const block = document.querySelector(this.block);
    for (let el of this.goods) {
      const productObj = new BasketItem(el);
      this.allProducts.push(productObj);
      block.insertAdjacentHTML("beforeend", productObj.render());
    }
  }
}

class BasketItem {
  constructor(el, img = "https://placehold.it/50x100") {
    this.product_name = el.product_name;
    this.price = el.price;
    this.id_product = el.id_product;
    this.img = img;
    this.quantity = el.quantity;
  }
  render() {
    return `<div class="cart-item" data-id="${this.id_product}">
              <div class="product-bio">
              <img src="${this.img}" alt="Some image">
              <div class="product-desc">
              <p class="product-title">${this.product_name}</p>
              <p class="product-quantity">Quantity: ${this.quantity}</p>
          <p class="product-single-price">$${this.price} each</p>
          </div>
          </div>
          <div class="right-block">
              <p class="product-price">$${this.quantity * this.price}</p>
              <button class="del-btn" data-id="${
                this.id_product
              }">&times;</button>
          </div>
          </div>`;
  }
}

let cart = new Cart();
