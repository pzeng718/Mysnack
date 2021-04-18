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
let product = products.filter((p) => p.id === product_id)[0] || {};

let productNameBody = jQuery(".product-name");
let productImageBody = jQuery(".product-image");
let amountSelectBody = jQuery("#amount-select");
let totalPriceBody = jQuery(".total-price");
let orderSummaryBody = jQuery(".order-summary");
let unitPriceBody = jQuery("#unit-price");

productNameBody.append(`${product.name}`);
if (product.image) {
  for (let imgSrc of product.image) {
    productImageBody.append(`<img src=${imgSrc} alt=${product.name}>`);
  }
}

let amountSelectHtml = `<input type="number" id="amount" value="1" min="1" max="${product.qty}" size="200px"> `;
amountSelectBody.append(amountSelectHtml);

let shippingCost = 9.99;
let qty = 1;

totalPriceBody.append(`$${(qty * product.price + shippingCost).toFixed(2)}`);

unitPriceBody.append(`$${product.price}`);
// Update total price based on the amount of products user select
jQuery("#amount").on("change", function () {
  var elem = $(this);
  qty = elem.val();
  elem
    .closest(".order-form")
    .find(".total-price")
    .text(`$${(qty * product.price + shippingCost).toFixed(2)}`);

  elem.closest(".order-form").find("#qty-selected").text(`${qty}`);
});

const shippingMethodsToPrice = {
  sameday: 9.99,
  overnight: 5.99,
  "2-day": 1.99,
  standard: 0,
};
// Add the shipping cost to the total price
jQuery("#shipping-method").on("change", function () {
  var elem = $(this);
  var shippingMethod = elem.val();
  var shippingCost = shippingMethodsToPrice[shippingMethod];
  elem
    .closest(".order-form")
    .find(".total-price")
    .text(`$${(qty * product.price + shippingCost).toFixed(2)}`);

  elem.closest(".order-form").find("#shipping-cost").text(`$${shippingCost}`);
});

// Nav bar responsive
function onHamburgerMenuClick() {
  $(".navbar-items-wrapper").toggleClass("navbar-items-wrapper--responsive");
}

// form validation
$(document).ready(function () {
  // $(".order-form").validate();

  $("#order-form").validate({
    submitHandler: function (form) {
      // do other things for a valid form
      console.log(sendEmail());
    },
  });
});

// send email
function sendEmail() {
  let amountSelect = $("#order-form").find("#amount-select").val();
  amountSelect =
    amountSelect && parseInt(amountSelect) ? parseInt(amountSelect) : 1;
  const shippingMethod = $("#order-form").find("#shipping-method").val();
  const shippingPrice = shippingMethodsToPrice[shippingMethod];
  const totalPrice = product.price * amountSelect + shippingPrice;
  var recepientEmail = $("#order-form").find("#email").val();
  var subject = "MySnack Order Confirmation";
  var emailContent =
    "Hello, This is MySnacks shop %0D%0A" +
    "Here is your order: " +
    "%0D%0AItem: " +
    product.name +
    "%0D%0AQuantity: " +
    amountSelect +
    "%0D%0ATotal Price: " +
    totalPrice +
    "%0D%0AThank you for shopping with us.";
  window.location =
    "mailto:" +
    recepientEmail +
    "?subject=" +
    subject +
    "&body=" +
    emailContent;
  return emailContent;
  // `Hello this is ..... ${product.name}....`
}
