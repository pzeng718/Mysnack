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
let product = products.filter((p) => p.id === product_id)[0];

let productNameBody = jQuery(".product-name");
let productImageBody = jQuery(".product-image");
let amountSelectBody = jQuery(".amount-select");
let priceinfoBody = jQuery(".price-info");

productNameBody.append(`${product.name}`);
for (let imgSrc of product.image) {
  productImageBody.append(`<img src=${imgSrc} alt=${product.name}>`);
}

let amountSelectHtml = '<select name="amount" id="amount">';
for (let i = 1; i <= product.qty; i++) {
  amountSelectHtml += `<option value="${i.toString()}">${i}</option>`;
}
amountSelectHtml += "</select>";
amountSelectHtml += `<br/>Qty available: ${product.qty}`;
amountSelectBody.append(amountSelectHtml);

let shippingCost = 9.99;
let qty = 1;

let priceinfoHtml = `<p>Unit Price: $${product.price}</p>`;
priceinfoHtml += `<p class="total-price">Total Price: $${(
  qty * product.price +
  shippingCost
).toFixed(2)}<p>`;
priceinfoBody.append(priceinfoHtml);

// Update total price based on the amount of products user select
jQuery("#amount").on("change", function () {
  var elem = $(this);
  qty = parseInt(elem.val());
  elem
    .closest(".order-form")
    .find(".total-price")
    .text(`Total Price: $${(qty * product.price + shippingCost).toFixed(2)}`);
});

// Add the shipping cost to the total price
jQuery("#shipping-method").on("change", function () {
  var elem = $(this);
  var shippingMethod = elem.val();
  switch (shippingMethod) {
    case "sameday":
      shippingCost = 9.99;
      break;
    case "overnight":
      shippingCost = 5.99;
      break;
    case "2-day":
      shippingCost = 1.99;
      break;
    case "standard":
      shippingCost = 0;
      break;
  }
  elem
    .closest(".order-form")
    .find(".total-price")
    .text(`Total Price: $${(qty * product.price + shippingCost).toFixed(2)}`);
});
