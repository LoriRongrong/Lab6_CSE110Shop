// Script.js

window.addEventListener('DOMContentLoaded', () => {
  
  
  if (!localStorage.getItem('part2')) {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      localStorage.setItem('part2', JSON.stringify(data));
      console.log('store data');
    });
  }

  const products = localStorage.getItem('part2');
  const productList = document.getElementById('product-list');

  JSON.parse(products).forEach((item) => {

    const product = document.createElement('product-item');
    product.addAttribute(item);
    productList.appendChild(product);
    const bt = product.button;
    const count = document.getElementById('cart-count');
    
    bt.addEventListener('click', () => {
      if (bt.on) {
        bt.textContent = 'Remove from Cart';
        count.textContent = parseInt(count.textContent) + 1;
        bt.on = false;
      } else {
        bt.on = true;
        bt.textContent = 'Add to Cart';
        count.textContent = parseInt(count.textContent) - 1;
      }
      
    })
  });

  const count = document.getElementById('cart-count');

  
    
});