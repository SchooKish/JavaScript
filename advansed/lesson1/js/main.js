const products = [
  { id: 1, title: "Notebook", price: 2000 },
  { id: 2, title: "Mouse", price: 20 },
  { id: 3, title: "Keyboard", price: 200 },
  { id: 4, title: "Gamepad", price: 50 },
];
//Функция для формирования верстки каждого товара
const renderProduct = (product) => {
  return `<div class="product-item">
                <h3>${product.title}</h3>
                <p>${product.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`;
};
const renderPage = (list) => {
  document.querySelector(".products").innerHTML = list
    .map((item) => renderProduct(item))
    .join("");
};

renderPage(products);

// Ответ на вопрос 3

/*
    Запятая появляется потому что мы всталяем в документ элементы массива, они разделяются запятыми, 
    а метод join объединяет все элементы массива в одну строку, также можно указать что будет разделителем 
    вместо запятой, ничего или любой другой знак.
*/
