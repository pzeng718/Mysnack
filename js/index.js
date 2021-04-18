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

let productBodyElement = jQuery(".Product");

let productHtml = '<div class="product-container">';
for (let product of products) {
  productHtml += '<div class="product-item">';
  productHtml +=
    `<a href="product-info.html?product_id=${product.id}">` +
    // `<img src="${product.image[0]}" alt=${product.name} style="width:400px;height:350px;"></img></a>`;
    `<img  class="product-image" src="${product.image[0]}" alt=${product.name}"></img></a>`;

  productHtml += '<div class="product-title">';

  productHtml += `<p>Name: <strong>${product.name}</p></strong>`;
  productHtml += `<p>Price: <strong>${product.price}</p></strong>`;
  productHtml += `<p>Quantity: <strong>${product.qty}</p></strong>`;
  productHtml += "</div>";

  productHtml += "</div>";
}
productHtml += "</div>";
productBodyElement.append(productHtml);

function onHamburgerMenuClick() {
  $('.navbar-items-wrapper').toggleClass('navbar-items-wrapper--responsive');
}
