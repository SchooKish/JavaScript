"use strict";

// Задаание 1

function task1() {
  //фукция генерирования рандомного числа от 0 до 999
  function getRandom() {
    return Math.floor(Math.random() * 1000);
  }
  //Присваивание полученного рандомного числа в переменную
  let number = getRandom();
  //Функция определяет цифру в разряде единиц посредством нахождения остатка от деления на 10
  function units() {
    return number % 10;
  }
  //Функция определяет цифру в разряде десяток посредством нахождения остатка от деления на 100, делим его на 10 и отбрасываем значение после точки
  function tens() {
    return Math.floor((number % 100) / 10);
  }
  //Функция определяет цифру в разряде сотен делением числа на 100 и отбрасывает значение после точки
  function hundreds() {
    return Math.floor(number / 100);
  }
  // Конструктор объекта
  function Fraction(number) {
    this.units = units();
    this.tens = tens();
    this.hundreds = hundreds();
  }

  const answer = new Fraction(number);

  console.log(answer);
  console.log(number);
}

task1();

// Реализация задания 1 уже после просмотра решения

function task1v2() {
  let number = Math.floor(Math.random() * 1000);

  function getDigits(number) {
    return {
      units: number % 10,
      tens: Math.floor((number % 100) / 10),
      hundreds: Math.floor(number / 100),
    };
  }

  console.log(getDigits(number));
  console.log(number);
}

task1v2();

//Задание 1.1

function task1$1() {
  //в стиле es5
  function Product1(name, price) {
    this.name = name;
    this.price = price;
  }

  Product1.prototype.makeDiscount1 = function () {
    this.price = this.price - (this.price * 25) / 100;
  };

  const product1 = new Product1("товар", 420);
  console.log(product1);

  product1.makeDiscount1();
  console.log(product1);

  // в стиле es6

  class Product2 {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
    makeDiscount2() {
      this.price = this.price - (this.price * 25) / 100;
    }
  }

  const product2 = new Product2("товар", 580);
  console.log(product2);

  product2.makeDiscount2();
  console.log(product2);
}

task1$1();

//задание 1.2
function task1$2() {
  // в стиле es5 a

  function Post1(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
  }

  Post1.prototype.edit1 = function () {
    this.text = prompt("Введите новый текст");
  };

  const post1 = new Post1("Кирилл", "я покорю эти объекты", new Date());
  console.log(post1);

  post1.edit1();
  console.log(post1);

  //в стле es6 a

  class Post2 {
    constructor(author, text, date) {
      this.author = author;
      this.text = text;
      this.date = date;
    }

    edit2() {
      this.text = prompt("Введите новый текст");
    }
  }

  const post2 = new Post2("Кирилл", "я покорю эти объекты", new Date());
  console.log(post2);

  post2.edit2();
  console.log(post2);

  // в стиле es5 b

  function AttachedPost1(author, text, date) {
    Post1.call(this, author, text, date);
    this.highlighted = false;
  }

  AttachedPost1.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
  };

  const attachedPost1 = new AttachedPost1(
    "Кирилл",
    "я покорю эти объекты",
    new Date()
  );
  console.log(attachedPost1);

  attachedPost1.makeTextHighlighted();
  console.log(attachedPost1);

  // в стиле es6 b

  class AttachedPost2 extends Post2 {
    constructor(author, text, date) {
      super(author, text, date);
      this.highlighted = false;
    }

    makeTextHighlighted() {
      this.highlighted = true;
    }
  }
  const attachedPost2 = new AttachedPost2(
    "Кирилл",
    "я покорю эти объекты",
    new Date()
  );
  console.log(attachedPost2);

  attachedPost2.makeTextHighlighted();
  console.log(attachedPost2);
}

task1$2();
