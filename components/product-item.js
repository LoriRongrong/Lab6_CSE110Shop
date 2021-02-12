// product-item.js

class ProductItem extends HTMLElement {

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    
    const li = document.createElement('li');
    this.li = li;
    li.setAttribute('class', 'product');
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

    style.innerHTML = `.price {
      color: green;
      font-size: 1.8em;
      font-weight: bold;
      margin: 0;
    }
    
    .product {
      align-items: center;
      background-color: white;
      border-radius: 5px;
      display: grid;
      grid-template-areas: 
      'image'
      'title'
      'price'
      'add';
      grid-template-rows: 67% 11% 11% 11%;
      height: 450px;
      filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
      margin: 0 30px 30px 0;
      padding: 10px 20px;
      width: 200px;
    }
    
    .product > button {
      background-color: rgb(255, 208, 0);
      border: none;
      border-radius: 5px;
      color: black;
      justify-self: center;
      max-height: 35px;
      padding: 8px 20px;
      transition: 0.1s ease all;
    }
    
    .product > button:hover {
      background-color: rgb(255, 166, 0);
      cursor: pointer;
      transition: 0.1s ease all;
    }
    
    .product > img {
      align-self: center;
      justify-self: center;
      width: 100%;
    }
    
    .title {
      font-size: 1.1em;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .title:hover {
      font-size: 1.1em;
      margin: 0;
      white-space: wrap;
      overflow: auto;
      text-overflow: unset;
    }
    `

    
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
    this.button.on = 'true';
    this.button.setAttribute('onclick', 'alert(\'Added to Cart!\')' );
    this.button.textContent = 'Add to Cart';
    this.button.setAttribute('id', item.id);
    
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