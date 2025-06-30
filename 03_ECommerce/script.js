document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {id:1, name: 'Product 1', price: 10.00},
        {id:2, name: 'Product 2', price: 20.00},
        {id:3, name: 'Product 3', price: 30.00},
        {id:4, name: 'Product 4', price: 40.00}
    ];

    const cart = [];
    const productList = document.getElementById('product-list');
    const cartItems = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart');
    const cartTotalMessage = document.getElementById('cart-total');
    const totalPrice = document.getElementById('total-price');
    const checkOutBtn = document.getElementById('checkout-btn');

    products.forEach(product => {
        const productLi = document.createElement('li');
        productLi.classList.add('product');
        productLi.innerHTML =`
        <span>${product.name} - $${product.price}</span>
        <button data-id=${product.id}>Add to Cart</button>
        `;
        productList.appendChild(productLi);
    });

    productList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const product = products.find(p => p.id === productId)
            addToCart(product);
        }
    });

    // Load cart from localStorage if available
    function loadCart() {
        const stored = localStorage.getItem('cart');
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed)) {
                    cart.length = 0;
                    parsed.forEach(item => cart.push(item));
                }
            } catch {}
        }
    }

    // Save cart to localStorage
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Update addToCart, rendercart, and remove logic to save cart
    function addToCart(product) {
        // Check if product already in cart
        const existing = cart.find(item => item.id === product.id);
        if (existing) {
            existing.qty = (existing.qty || 1) + 1;
        } else {
            cart.push({ ...product, qty: 1 });
        }
        saveCart();
        rendercart();
    }

    function rendercart(){
        cartItems.innerText = '';
        let total = 0;

        if (cart.length > 0) {
            emptyCartMessage.classList.add('hidden');
            cartTotalMessage.classList.remove('hidden');
            cart.forEach((item, index) => {
                total += (item.price * (item.qty || 1));
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
                    <span>${item.name} - $${item.price.toFixed(2)}</span>
                    <span class="cart-product-qty">
                        <button class="qty-btn decrease" data-index="${index}">-</button>
                        <span class="qty-value">${item.qty || 1}</span>
                        <button class="qty-btn increase" data-index="${index}">+</button>
                    </span>
                    <button class="remove-btn" data-index="${index}">Remove</button>
                `;
                cartItems.appendChild(cartItem);
            });
            totalPrice.textContent = `$${total.toFixed(2)}`;
        } else {
            emptyCartMessage.classList.remove('hidden');
            totalPrice.textContent = '$0.00';
        }
    }

    cartItems.addEventListener('click', (e) => {
        const index = parseInt(e.target.getAttribute('data-index'));
        if (e.target.classList.contains('remove-btn')) {
            cart.splice(index, 1);
            saveCart();
            rendercart();
        } else if (e.target.classList.contains('qty-btn')) {
            if (e.target.classList.contains('increase')) {
                cart[index].qty = (cart[index].qty || 1) + 1;
            } else if (e.target.classList.contains('decrease')) {
                cart[index].qty = (cart[index].qty || 1) - 1;
                if (cart[index].qty <= 0) cart.splice(index, 1);
            }
            saveCart();
            rendercart();
        }
    });

    checkOutBtn.addEventListener('click', () => {
        if (cart.length > 0) {
            alert(`Thank you for your purchase! Total: $${totalPrice.textContent}`);
            cart.length = 0; // Clear the cart
            saveCart();
            rendercart();
        } else {
            alert('Your cart is empty!');
        }
    });

    // On page load, restore cart
    loadCart();
    rendercart();
});