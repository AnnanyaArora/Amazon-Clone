document.addEventListener("DOMContentLoaded", function () {
    // Get cart items from localStorage, or initialize an empty array if none
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const container = document.getElementById("cart-item");
    const totalElement = document.getElementById("total-price");

    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach((item, index) => {
            total += parseFloat(item.price);  

            container.innerHTML += `
                <div class="cart-item">
                    <img src="${item.img}" width="100" />
                    <div class="cart-item-name">
                        <h3>${item.name}</h3>
                        <p>Price: $${item.price}</p>
                        <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
                    </div>
                </div>
            `;
        });
    }

    // Update the total price
    if (totalElement) {
        totalElement.textContent = `Total Price: $${total.toFixed(2)}`;
    }
});

// To handle the remove functionality:
function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Remove the item at the specified index
    cart.splice(index, 1);

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Re-render the cart to reflect changes
    document.getElementById('cart-item').innerHTML = '';  // Clear current cart display
    displayCartItems();  // Re-render updated cart
}

// Function to re-render cart items after removal
function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const container = document.getElementById("cart-item");
    const totalElement = document.getElementById("total-price");
    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach((item, index) => {
            total += parseFloat(item.price);  // Total price without quantity

            container.innerHTML += `
                <div class="cart-item">
                    <img src="${item.img}" width="100" />
                    <div class="cart-item-name">
                        <h3>${item.name}</h3>
                        <p>Price: $${item.price}</p>
                        <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
                    </div>
                </div>
            `;
        });
    }

    // Update the total price
    if (totalElement) {
        totalElement.textContent = `Total Price: $${total.toFixed(2)}`;
    }
}
// script/cart-utils.js

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCount = cart.length;
    const cartIcon = document.querySelector(".nav-cart span");

    if (cartIcon) {
        cartIcon.textContent = `Cart (${cartCount})`;
    }
}

