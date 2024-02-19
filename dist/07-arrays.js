"use strict";
(() => {
    let price = [1, 2, 3, 4, 5, 6, 'hola', true];
    // price.push('as');
    // price.push(true);
    // price.push({});
    price.push(213);
    let products = ['hola', true];
    products.push(12);
    let mixed = ['hola', true];
    mixed.push(12);
    mixed.push('as');
    mixed.push(true);
    mixed.push([]);
    mixed.push({});
    let numbers = [1, 12, 3, 4, 5, 56, 76, 7];
    numbers.map(item => item * 2);
})();
