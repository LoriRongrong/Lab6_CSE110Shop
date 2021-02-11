// Script.js

window.addEventListener('DOMContentLoaded', () => {
  
  // localStorage.clear();
  
  if (!localStorage.getItem('part2')) {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('part2', JSON.stringify(data));
      console.log('store data');
    });
  }

  const products = localStorage.getItem('part2');
  // console.log(products);
  const productList = document.getElementById('product-list');

  JSON.parse(products).forEach((item) => {

    const product = document.createElement('product-item');
    product.addAttribute(item);
    productList.appendChild(product); 
    const bt = product.button;
    const count = document.getElementById('cart-count');
   

    let localCart = localStorage.getItem('localCart');
    localCart = localCart ? localCart.split(',') : [];
    count.textContent = localCart.length;

  
    bt.addEventListener('click', () => {
      if (bt.on) {
        bt.textContent = 'Remove from Cart';
        count.textContent = parseInt(count.textContent) + 1;
        bt.on = false;
        let idx = localCart.indexOf(bt.id);
        if (idx == -1) localCart.push(bt.id);
        localStorage.setItem('localCart', localCart.toString());
      } else {
        bt.on = true;
        bt.textContent = 'Add to Cart';
        count.textContent = parseInt(count.textContent) - 1;
        let idx = localCart.indexOf(bt.id);
        if (idx !== -1) localCart.splice(idx, 1);
      }
    
    }) 

    console.log(localCart);
    
  });



  

  
    
});