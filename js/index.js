let products = [
    {
        'name': 'potato chip',
        'price': 5.99,
        'qty': 10,
        'image': '../resource/potato_chip.jpg'
    },
    {
        'name': 'cashew',
        'price': 15.99,
        'qty': 5,
        'image': '../resource/cashew.jpg'
    },
    {
        'name': 'tortilla chip',
        'price': 3.99,
        'qty': 20,
        'image': '../resource/tortilla_chip.jpg'
    },
    {
        'name': 'rice snack',
        'price': 2.99,
        'qty': 15,
        'image': '../resource/rice_snack.jpg'
    },
    {
        'name': 'popcorn',
        'price': 2.99,
        'qty': 15,
        'image': '../resource/popcorn.jpg'
    },
    {
        'name': 'milk',
        'price': 4.99,
        'qty': 15,
        'image': '../resource/milk.jpg'
    },
    {
        'name': 'dove',
        'price': 5.99,
        'qty': 10,
        'image': '../resource/dove.jpg'
    },
    {
        'name': 'cheez-it',
        'price': 4.99,
        'qty': 10,
        'image': '../resource/cheez-it.png'
    },
    {
        'name': 'cheetos',
        'price': 1.99,
        'qty': 20,
        'image': '../resource/cheetos.jpg'
    },
    {
        'name': 'fritos',
        'price': 1.99,
        'qty': 10,
        'image': '../resource/fritos.jpg'
    },
    {
        'name': 'doritos-L',
        'price': 4.99,
        'qty': 15,
        'image': '../resource/doritos-L.png'
    }
]

let productBodyElement = jQuery(".Product");

let productHtml = '<div class="product-container">'
for (let product of products) {
    productHtml += '<div class="product-item">';
    productHtml += '<div class="product-title">'

    productHtml += `<p>Name: ${product.name}</p>`;
    productHtml += `<p>Price: ${product.price}</p>`
    productHtml += `<p>Quantity: ${product.qty}</p>`
    productHtml += '</div>'

    productHtml += `<img src="${product.image}" alt=${product.name} style="width:400px;height:300px;"></img>`
    productHtml += '</div>';
}
productHtml += '</div>'
productBodyElement.append(productHtml);