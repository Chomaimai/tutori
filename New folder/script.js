// Add your JavaScript code here (e.g., for adding products to the cart)
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Add product to cart logic here
        alert('Product added to cart!');
    });
});
