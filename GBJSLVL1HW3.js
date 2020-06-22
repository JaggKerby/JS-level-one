"use strict";

// /*
// Задание 2
// */

for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(i + ' это ноль');
    } else if (i % 2 == 0) {
        console.log(i + ' четное');
    } else {
        console.log(i + ' нечетное');
    }
}

// /* 
// Задание 3 
// */

const post = {
    author: "John", //вывести этот текст 
    postId: 23,
    comments: [{
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число 
            }
        },
        {
            userId: 5, //вывести это число 
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст 
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
}

console.log(post.author, post.comments[0].rating.dislikes);
console.log(post.comments[1].userId, post.comments[1].text);

// /*
// Задание 4 
// */
const products = [{
    id: 3,
    price: 200,
}, {
    id: 4,
    price: 900,
}, {
    id: 1,
    price: 1000,
}, ];

products.forEach(goods => {
    goods.price = goods.price * 0.85;
});


/*
задание 5 
*/

const products = [{
    id: 3,
    price: 127,
    photos: ['1.jpg', '2.jpg'],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ['3.jpg'],
  },
  {
    id: 8,
    price: 78,
  },
]


let goodsPhoto = products.filter(function (prodphotos) {
  for (let i = 0; i < products.length; i++) {
    if (prodphotos.photos != undefined && prodphotos.photos.length > 0) {
      return prodphotos.photos;
    }
  }
});

console.log(goodsPhoto);

products.sort(function toHighPrice(item1, item2) {
  return item1.price - item2.price;
})

console.log(products);

/*
Задание 6 
*/
for (let i = 0; i < 10; console.log(i++)) {};


/*
Задание 7 
*/
let string = ['x'];

for (let i = 0; i < 20; i++) {
    console.log(string.toString());
    string.push('x');
}