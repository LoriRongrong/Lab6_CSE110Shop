// Script.js

window.addEventListener('DOMContentLoaded', () => {
  
  // localStorage.clear();
  // load data 
  if (!localStorage.getItem('part2')) {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('part2', JSON.stringify(data));
      console.log('store data');
    });
  }
  // construct localCart for saving shopping information
  const products = localStorage.getItem('part2');
  const productList = document.getElementById('product-list');
  let localCart = localStorage.getItem('localCart');
  localCart = localCart ? localCart.split(',') : [];


  // construct individual product given json file 
  JSON.parse(products).forEach((item) => {

    const product = document.createElement('product-item');
    product.addAttribute(item);
    productList.appendChild(product); 
    const bt = product.button;
    const count = document.getElementById('cart-count');
   
    // set the count by previous localCart history
    count.textContent = localCart.length;
  
    // set the button text by previous history
    if (!localStorage.getItem(bt.id)) {
      localStorage.setItem(bt.id, bt.on);
    }
    bt.on = localStorage.getItem(bt.id);
    if (bt.on=='false') {
      console.log('change');
      bt.textContent = 'Remove from Cart';
    }
   
    // click button event
    bt.addEventListener('click', () => {
      // add item
      if (bt.on=='true') {
        bt.textContent = 'Remove from Cart';
        count.textContent = parseInt(count.textContent) + 1;
        bt.on = 'false';
        let idx = localCart.indexOf(bt.id);
        if (idx == -1) localCart.push(bt.id);
        localStorage.setItem('localCart', localCart.toString());
        localStorage.setItem(bt.id, bt.on);
      
      }
      // remove item 
      else {
        bt.on = 'true';
        bt.textContent = 'Add to Cart';
        count.textContent = parseInt(count.textContent) - 1;
        let idx = localCart.indexOf(bt.id);
        if (idx !== -1) localCart.splice(idx, 1);
        localStorage.setItem('localCart', localCart.toString());
        localStorage.setItem(bt.id, bt.on);
      }
    
    }) 
  });
  
  console.log(localCart);
    
});