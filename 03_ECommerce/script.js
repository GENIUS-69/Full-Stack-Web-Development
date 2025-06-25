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

    function addToCart(product) {
        cart.push(product);
        rendercart(cart);
    }

    function rendercart(){
        cartItems.innerText = '';
        let total = 0;

        if (cart.length > 0) {
            emptyCartMessage.classList.add('hidden');
            cartTotalMessage.classList.remove('hidden');
            cart.forEach((item, index) => {
                total += item.price;
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
                    <span>${item.name} - $${item.price.toFixed(2)}</span>
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
        if (e.target.classList.contains('remove-btn')) {
            const index = parseInt(e.target.getAttribute('data-index'));
            cart.splice(index, 1);
            rendercart();
        }
    });

    checkOutBtn.addEventListener('click', () => {
        if (cart.length > 0) {
            alert(`Thank you for your purchase! Total: $${totalPrice.textContent}`);
            cart.length = 0; // Clear the cart
            rendercart();
        } else {
            alert('Your cart is empty!');
        }
    });
});