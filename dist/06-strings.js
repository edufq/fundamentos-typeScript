"use strict";
(() => {
    let productTitle = 'my amazing product';
    // productTitle = null;
    // productTitle = () => {};
    productTitle = 'My amazing product changed';
    console.log('productTitle', productTitle);
    const productDescription = "bla bla bla";
    console.log('productDescription', productDescription);
    let productPrice = 100;
    const summary = `
    dsa
    dsdsd
  title: ${productTitle}
  price: ${productPrice}
    sssss

  `;
    console.log('summary', summary);
})();
