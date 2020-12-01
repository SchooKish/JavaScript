"use strict";

// Задание 1

/** 
 цикл определения четности числа 
*/

function task1() {
  for (let i = 0; i <= 10; i++) {
    if (i === 0) {
      console.log("0 - это ноль");
    } else if (i % 2 == 0) {
      console.log(i + " - это четное число");
    } else {
      console.log(i + " - это нечетное число");
    }
  }
}

task1();

// Задание 2

function task2() {
  const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
      {
        userId: 10,
        userName: "Alex",
        text: "lorem ipsum",
        rating: {
          likes: 10,
          dislikes: 2, //вывести это число
        },
      },
      {
        userId: 5, //вывести это число
        userName: "Jane",
        text: "lorem ipsum 2", //вывести этот текст
        rating: {
          likes: 3,
          dislikes: 1,
        },
      },
    ],
  };

  console.log(post.author);
  console.log(post.comments[0].rating.dislikes);
  console.log(post.comments[1].userId);
  console.log(post.comments[1].text);
}

task2();

// Задание 3

function task3() {
  const products = [
    {
      id: 3,
      price: 200,
    },
    {
      id: 4,
      price: 900,
    },
    {
      id: 1,
      price: 1000,
    },
  ];

  products.forEach((item) =>
    console.log(
      "Цена товара " + item.id + " с учетом скидки в 15%:" + item.price * 0.85
    )
  );
}

task3();

//Задание 4

function task4() {
  const products = [
    { id: 3, price: 127, photos: ["1.jpg", "2.jpg"] },
    { id: 5, price: 499, photos: [] },
    { id: 10, price: 26, photos: ["3.jpg"] },
    { id: 8, price: 78 },
  ];

  //Пункт 1, фильтрация по наличию фото в объекте
  const photo = products.filter(
    (item) => "photos" in item && item.photos.length > 0
  );
  console.log(photo);

  // Пункт 2, сортировка по возрастанию цены
  products.sort((a, b) => a.price - b.price);
  console.log(products);
}

task4();

//Задание 5

function task5() {
  for (let i = 0; i < 10; console.log(i++)) {}
}

task5();

//Задание 6

function task6() {
  const x = [];
  for (let i = 0; i < 20; i++) {
    x.push("x");
    console.log(x);
  }
}

task6();
