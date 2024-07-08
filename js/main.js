// open & close cart
var cart = document.querySelector(".cart");

function open_cart() {
  cart.classList.add("active");
}

function close_cart() {
  cart.classList.remove("active");
}

// open & close menu
var menu = document.querySelector("#menu");

function open_menu() {
  menu.classList.add("active");
}

function close_menu() {
  menu.classList.remove("active");
}

// open & close wishlist
var wishlist = document.querySelector(".wishlist");

function open_wishlist() {
  wishlist.classList.add("active");
}

function close_wishlist() {
  wishlist.classList.remove("active");
}

// add item in cart
var all_products_json;

var items_in_cart = document.querySelector(".items_in_cart");

let product_cart = [];

function addToCart(id, btn) {
  product_cart.push(all_products_json[id]);
  btn.classList.add("active");

  getCartItems();
}

function remove_from_cart(index) {
  product_cart.splice(index, 1);
  getCartItems();

  let addToCartButtons = document.querySelectorAll(".fa-cart-plus");
  for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].classList.remove("active");
    product_cart.forEach((product) => {
      if (product.id == i) {
        addToCartButtons[i].classList.add("active");
      }
    });
  }
}

let count_items = document.querySelector(".count_items");
let price_cart_head = document.querySelector(".price_cart_head");

let count_item_cart = document.querySelector(".count_item_cart");
let price_cart_total = document.querySelector(".price_cart_total");

function getCartItems() {
  let total_price = 0;
  let items_c = "";
  for (let i = 0; i < product_cart.length; i++) {
    items_c += `
            <div class="item_cart">
                <img src="${product_cart[i].img}" alt="" />
                <div class="content">
                <h4>${product_cart[i].name}</h4>
                <p class="price_cart">$${product_cart[i].price}</p>
                </div>
                <button onclick="remove_from_cart(${i})" class="delete_item">
                <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `;
    total_price += product_cart[i].price;
  }
  items_in_cart.innerHTML = items_c;

  price_cart_head.innerHTML = "$" + total_price;

  count_items.innerHTML = product_cart.length;

  price_cart_total.innerHTML = "$" + total_price;

  count_item_cart.innerHTML = `(${product_cart.length} items in cart)`;
}

// add item in wishlit
var all_products_json;

var items_in_wishlist = document.querySelector(".items_in_wishlist");

let product_wishlit = [];

function addToWishlit(id, btn) {
  product_wishlit.push(all_products_json[id]);
  btn.classList.add("active");

  getWishlitItems();
}

function remove_from_wishlist(index) {
  product_wishlit.splice(index, 1);
  getWishlitItems();

  let addToWishlistButtons = document.querySelectorAll(".fa-heart");
  for (let i = 0; i < addToWishlistButtons.length; i++) {
    addToWishlistButtons[i].classList.remove("active");
    product_wishlit.forEach(product => {
      if (product.id == i) {
        addToWishlistButtons[i].classList.add("active");
      }
    });
  }
}

function clearWishlist() {
  product_wishlit = [];
  getWishlitItems();

  let addToWishlistButtons = document.querySelectorAll(".fa-heart");
  for (let i = 0; i < addToWishlistButtons.length; i++) {
    addToWishlistButtons[i].classList.remove("active");
  }
}

let count_items_wishlist = document.querySelector(".count_items_wishlist");

let count_item_wishlist = document.querySelector(".count_item_wishlist");

function getWishlitItems() {
  let items_c = "";
  for (let i = 0; i < product_wishlit.length; i++) {
    items_c += `
            <div class="item_wishlist">
                <img src="${product_wishlit[i].img}" alt="" />
                <div class="content">
                <h4>${product_wishlit[i].name}</h4>
                <p class="price_cart">$${product_wishlit[i].price}</p>
                </div>
                <button onclick="remove_from_wishlist(${i})" class="delete_item">
                <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `;
  }
  items_in_wishlist.innerHTML = items_c;

  count_items_wishlist.innerHTML = product_wishlit.length;

  count_item_wishlist.innerHTML = `(${product_wishlit.length} items in wishlist)`;
}

// Scroll to top
let back_to_top = document.querySelector(".back_to_top");

back_to_top.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// change item image
let bigImage = document.getElementById("bigImg");

function changeItemImage(img){
  bigImage.src = img;
}
