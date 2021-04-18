let products = [
  {
    id: 1,
    name: "potato chip",
    price: 5.99,
    qty: 10,
    description: "Yummy chips, but do not eat too much of it",
    manufacturer: "Kay's",
    image: ["../resource/potato_chip.jpg", "../resource/potato_chip_2.jpg"],
  },
  {
    id: 2,
    name: "cashew",
    price: 15.99,
    qty: 5,
    description: "Delicious cashew, amazing snack when you wanna eat something",
    manufacturer: "Good Farm Inc.",
    image: ["../resource/cashew.jpg", "../resource/cashew_2.jpg"],
  },
  {
    id: 3,
    name: "tortilla chip",
    price: 3.99,
    qty: 20,
    description: "Who doesn't love this tortilla chip with some sauce",
    manufacturer: "Kay's",
    image: ["../resource/tortilla_chip.jpg", "../resource/tortilla_chip_2.jpg"],
  },
  {
    id: 4,
    name: "rice snack",
    price: 2.99,
    qty: 15,
    description: "Rice snack is amazing!",
    manufacturer: "SnackShock inc.",
    image: ["../resource/rice_snack.jpg", "../resource/rice_snack_2.jpg"],
  },
  {
    id: 5,
    name: "popcorn",
    price: 2.99,
    qty: 15,
    description: "Wonderful snack when watching a movie!",
    manufacturer: "SnackOkay limited",
    image: ["../resource/popcorn.jpg", "../resource/popcorn_2.jpg"],
  },
  {
    id: 6,
    name: "milk",
    price: 4.99,
    qty: 15,
    description: "Very healthy, good source for calcium",
    manufacturer: "Golden Farm inc.",
    image: ["../resource/milk.jpg", "../resource/milk_2.jpg"],
  },
  {
    id: 7,
    name: "dove",
    price: 5.99,
    qty: 10,
    description: "Sweet snack, sweet day",
    manufacturer: "SweetC",
    image: ["../resource/dove.jpg", "../resource/dove_2.jpg"],
  },
  {
    id: 8,
    name: "cheez-it",
    price: 4.99,
    qty: 10,
    description: "Just grab it to go, it is amazing",
    manufacturer: "SnackShock inc.",
    image: ["../resource/cheez_it.png", "../resource/cheez_it_2.png"],
  },
  {
    id: 9,
    name: "cheetos",
    price: 1.99,
    qty: 20,
    description: "Just cannot have enough of this",
    manufacturer: "SnackOkay limited",
    image: ["../resource/cheetos.jpg", "../resource/cheetos_2.jpg"],
  },
  {
    id: 10,
    name: "fritos",
    price: 1.99,
    qty: 10,
    description: "Gotta love the chips",
    manufacturer: "Kay's",
    image: ["../resource/fritos.jpg", "../resource/fritos_2.jpg"],
  },
  {
    id: 11,
    name: "doritos-L",
    price: 4.99,
    qty: 15,
    description: "Oh boy I love this, I can finish a bag in a hour",
    manufacturer: "Kay's",
    image: ["../resource/doritos-L.png", "../resource/doritos-L_2.png"],
  },
];

let url = new URL(window.location.href);
let product_id = parseInt(url.searchParams.get("product_id"));

let product = products.find((p) => p.id === product_id);

let productNameBody = jQuery("#productName");
let orderBtnBody = jQuery(".order-btn");
let infoBody = jQuery(".info");

productNameBody.append(`<i>${product.name}</i>`);

for (let imageSrc of product.image) {
  infoBody.append(`<img src=${imageSrc}></img>`);
}

infoBody.append(
  `<p>Quantity left available: <strong>${product.qty}</strong></p>`
);
infoBody.append(`<p>Price: <strong>${product.price}</strong></p>`);
infoBody.append(
  `<p>Manufactured by: <strong>${product.manufacturer}</strong></p>`
);
infoBody.append(`<p>- <i>${product.description}</i></p>`);

orderBtnBody.append(`<form action="order-page.html?product_id=${product_id}" method="POST">
<button type="submit">Order this product</button>
</form>`);

function onHamburgerMenuClick() {
  $('.navbar-items-wrapper').toggleClass('navbar-items-wrapper--responsive');
}
