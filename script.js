// Script to handle basic interactivity like adding to cart
document.addEventListener("DOMContentLoaded", () => {
    const cart = [];

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const productId = button.dataset.id;
            cart.push(productId);
            alert("Product added to cart!");
        });
    });
});
