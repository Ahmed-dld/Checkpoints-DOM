

let carts = document.querySelectorAll('.add-cart');
let products = [
  {
    name: 'CCIT M1',
    tag: 'CCIT M1',
    price: 100,
    incart:0

  },
  {
    name: 'CCIT M2',
    tag: 'CCIT M2',
    price: 150,
    incart:0

  },
  {
    name: 'CCIT M3',
    tag: 'CCIT M3',
    price: 250,
    incart:0

  },
  {
    name: 'CCIT M4',
    tag: 'CCIT M4',
    price: 300,
    incart:0

  }
];

for (let i=0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
   cartNumbers(products[i]);
   totalCost(products[i])

  })
}

function onloadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');
  if (productNumbers) {
    document.querySelector('.cart span').textContent = productNumbers;
  } 
}

function cartNumbers(product) {
  console.log("The product clicked is", product);
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);
  if( productNumbers ) {
    localStorage.setItem ('cartNumbers' , productNumbers + 1 );
    document.querySelector('.cart span').textContent = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
  }
  setItem(product);
}
function setItem(product) {
  let cartItems = localStorage.getItem('productsIncart');
  cartItems = JSON.parse(cartItems);

  if(cartItems != null) {
    if(cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product
      }
    }
cartItems[product.tag].incart += 1;
  }
  product.incart = 1;
  cartItems = {
    [product.tag]: product
  }

  
  
  localStorage.setItem("productsIncart", JSON.stringify
  (cartItems));

}
function totalCost(product) {
  let cartCost = localStorage.getItem('totalCost');
 
  if(cartCost != null) {
    cartCost = parseInt(cartCost);
localStorage.setItem("totalCost", cartCost + product.price);
  } else {

  
localStorage.setItem("totalCost", product.price);
}

}
function displayCart() {
let cartItems = localStorage.getItem("productsInCart");
cartItems = JSON.parse(cartItems);
let productConainer = document.querySelector
(".products-container");


  
}

function changeHeadingBg(color){
  document.getElementById("heading").style.color = color;
}  





