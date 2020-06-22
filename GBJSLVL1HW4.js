'use strict';
// /*
// Задание 1
// */

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price * 0.75;
};

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price = this.price * 0.75;
    };
}


let product = new Product('Kettle', 200);
let product1 = new Product('PC', 5000);
let product2 = new Product('Console', 600);


product.make25PercentDiscount();


console.log(product);



/*
Задание 2
*/

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
};

Post.prototype.edit = function () {
    this.text = this.text.toUpperCase();
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

let post = new Post('Lilly', 'Lorem ipsum ips', '10:20');
let post2 = new AttachedPost('Sometext', 'Lorem' ,'20:30');
post.edit();
post2.makeTextHighlighted();


class Post {
    constructor(author, text, date) {
        this.author = author,
        this.text = text,
        this.date = date
    }
    edit() {
        this.text = this.text.toUpperCase();
    }
};


class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
};

let post = new Post('Lilly', 'Lorem ipsum ips', '10:20');
let post2 = new AttachedPost('Sometext', 'Lorem' ,'20:30');
post.edit();
post2.makeTextHighlighted();
post2.edit();

console.log(post, post2);