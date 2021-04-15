let url = new URL(window.location.href);
product_id = url.searchParams.get("product_id");
let testBody = jQuery(".test");
testBody.append("<p>It is here now</p>");
