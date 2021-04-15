let products = [
  {
    id: 1,
    name: "potato chip",
    price: 5.99,
    qty: 10,
    image: "../resource/potato_chip.jpg",
  },
  {
    id: 2,
    name: "cashew",
    price: 15.99,
    qty: 5,
    image: "../resource/cashew.jpg",
  },
  {
    id: 3,
    name: "tortilla chip",
    price: 3.99,
    qty: 20,
    image: "../resource/tortilla_chip.jpg",
  },
  {
    id: 4,
    name: "rice snack",
    price: 2.99,
    qty: 15,
    image: "../resource/rice_snack.jpg",
  },
  {
    id: 5,
    name: "popcorn",
    price: 2.99,
    qty: 15,
    image: "../resource/popcorn.jpg",
  },
  {
    id: 6,
    name: "milk",
    price: 4.99,
    qty: 15,
    image: "../resource/milk.jpg",
  },
  {
    id: 7,
    name: "dove",
    price: 5.99,
    qty: 10,
    image: "../resource/dove.jpg",
  },
  {
    id: 8,
    name: "cheez-it",
    price: 4.99,
    qty: 10,
    image: "../resource/cheez-it.png",
  },
  {
    id: 9,
    name: "cheetos",
    price: 1.99,
    qty: 20,
    image: "../resource/cheetos.jpg",
  },
  {
    id: 10,
    name: "fritos",
    price: 1.99,
    qty: 10,
    image: "../resource/fritos.jpg",
  },
  {
    id: 11,
    name: "doritos-L",
    price: 4.99,
    qty: 15,
    image: "../resource/doritos-L.png",
  },
];

let productBodyElement = jQuery(".Product");

let productHtml = '<div class="product-container">';
for (let product of products) {
  productHtml += '<div class="product-item">';
  productHtml +=
    `<a href="product-info?product_id=${product.id}">` +
    `<img src="${product.image}" alt=${product.name} style="width:400px;height:350px;"></img></a>`;

  productHtml += '<div class="product-title">';

  productHtml += `<p>Name: <strong>${product.name}</p></strong>`;
  productHtml += `<p>Price: <strong>${product.price}</p></strong>`;
  productHtml += `<p>Quantity: <strong>${product.qty}</p></strong>`;
  productHtml += "</div>";

  productHtml += "</div>";
}
productHtml += "</div>";
productBodyElement.append(productHtml);
