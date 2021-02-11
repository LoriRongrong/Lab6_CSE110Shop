// product-item.js

class ProductItem extends HTMLElement {

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    
    const li = document.createElement('li');
    this.li = li;
    const img = document.createElement('img');
    
    img.setAttribute('width',200);
    this.img = img;
    const p1 = document.createElement('p');
    this.p1 = p1;
    p1.setAttribute('class','title');
    
    const p2 = document.createElement('p');
    
    p2.setAttribute('class','price');
    this.p2 = p2;
    const button = document.createElement('button');
    this.button = button;
    const style = document.createElement('style');

    shadow.appendChild(style);
    shadow.appendChild(li);
    li.appendChild(img);
    li.appendChild(p1);
    li.appendChild(p2);
    li.appendChild(button);
    
  }
  addAttribute(item) {
    this.img.src = item.image;
    
    this.img.alt = item.title;
    this.p1.textContent = item.title;
    this.p2.textContent = item.price;
    // console.log(this.p1);
    this.button.setAttribute('onclick', 'alert(\'Added to Cart!\')' );
    this.button.textContent = 'Add to Cart';
    this.button.on = true;
    // console.log(this.button);
  }
  

  
}

customElements.define('product-item', ProductItem);


 //<!-- Sample Product -->
// <!-- li class="product">
// <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops" width=200>
// <p class="title">Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops</p>
// <p class="price">$109.95</p>
// <button onclick="alert('Added to Cart!')">Add to Cart</button>
// </li -->