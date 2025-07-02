let total = 0;
const cartItems = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");

function addToCart(productName, price) {
  const li = document.createElement("li");
  li.textContent = `${productName} - ${price} บาท`;
  cartItems.appendChild(li);
  total += price;
  totalDisplay.textContent = total;
}
