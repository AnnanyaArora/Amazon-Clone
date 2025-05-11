document.addEventListener('click', function(event) {
    if (event.target.classList.contains('Add-To-Cart')) {
        const productCard = event.target.closest('.product-card');
        const title = productCard.querySelector('.product-title').textContent.trim();
        const price = productCard.querySelector('.product-price').textContent.replace('$', '').trim();
        const img = productCard.querySelector('.product-img').getAttribute('src');

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({ name: title, price: price, img: img });

        localStorage.setItem('cart', JSON.stringify(cart));

        // Update cart icon count
        const cartIcon = document.getElementById('cart-count');
        if (cartIcon) {
            cartIcon.textContent = `Cart (${cart.length})`;
        }
    }
});
