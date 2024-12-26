document.addEventListener('DOMContentLoaded', () => {
    // Function to update the total price
    const updateTotalPrice = () => {
        const cartItems = document.querySelectorAll('.cart-item');
        let total = 0;

        cartItems.forEach(item => {
            const price = parseFloat(item.querySelector('.price').textContent.replace('$', '')) || 0;
            const quantity = parseInt(item.querySelector('.quantity').textContent) || 0;

            total += price * quantity;
        });

        const shipping = 5.00;
        const subtotal = total;
        const finalTotal = subtotal + shipping;

        // to Update summary
        document.querySelector('#subtotal').textContent = `$${subtotal.toFixed(2)}`;
        document.querySelector('#shipping').textContent = `$${shipping.toFixed(2)}`;
        document.querySelector('#total').textContent = `$${finalTotal.toFixed(2)}`;
    };

    // Select all cart items and add functionality to buttons
    const cartItems = document.querySelectorAll('.cart-item');
    cartItems.forEach(item => {
        const plusBtn = item.querySelector('.plus');
        const minusBtn = item.querySelector('.minus');
        const deleteBtn = item.querySelector('.delete');
        const heartBtn = item.querySelector('.heart');
        const quantityElem = item.querySelector('.quantity');

        // Increase quantity
        plusBtn.addEventListener('click', () => {
            quantityElem.textContent = parseInt(quantityElem.textContent) + 1;
            updateTotalPrice();
        });

        // Decrease quantity
        minusBtn.addEventListener('click', () => {
            let currentQuantity = parseInt(quantityElem.textContent);
            if (currentQuantity > 1) {
                quantityElem.textContent = currentQuantity - 1;
                updateTotalPrice();
            }
        });

        // Delete item
        deleteBtn.addEventListener('click', () => {
            item.remove();
            updateTotalPrice();
        });

        // Toggle favorite/like
        heartBtn.addEventListener('click', () => {
            heartBtn.classList.toggle('liked');
        });
    });

    // Initial total price calculation
    updateTotalPrice();
});
