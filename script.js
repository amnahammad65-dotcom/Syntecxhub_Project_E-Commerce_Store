let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    total += price;

    displayCart();
}

function removeFromCart(index) {
    total -= cart[index].price;

    cart.splice(index, 1);

    displayCart();
}

function displayCart() {
    const cartDiv = document.getElementById("cart");

    cartDiv.innerHTML = "";

    cart.forEach((item, index) => {
        cartDiv.innerHTML += `
            <div class="cart-item">
                <span>${item.name} - Rs. ${item.price}</span>
                <button onclick="removeFromCart(${index})">
                    Remove
                </button>
            </div>
        `;
    });

    document.getElementById("total").textContent = total;
}