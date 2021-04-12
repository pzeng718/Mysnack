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
    }
]

let productBodyElement = jQuery(".Product");

for (let product of products) {
    let productHtml = '<li>';
    productHtml += `Name: ${product.name}<ul>`;
    productHtml += `<li>Price: ${product.price}</li>`
    productHtml += `<li>Quantity: ${product.qty}</li>`
    productHtml += '</li>';
    productHtml += `<img src="${product.image}" alt=${product.name} style="width:400px;height:300px;"></img>`
    productBodyElement.append(productHtml);
}