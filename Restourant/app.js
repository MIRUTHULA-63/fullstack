
// Sample Menu Data
const menus = {
    restaurant1: [
        { id: 1, name: "Pizza", price: 12, image: "C:\Users\mirut\OneDrive\Pictures\rest image.avif" },
        { id: 2, name: "Pasta", price: 10, image: "images/pasta.avif" },
    ],
    restaurant2: [
        { id: 3, name: "Burger", price: 8, image: "images/burger.jpg" },
        { id: 4, name: "Fries", price: 4, image: "images/fries.webp" },
    ],
};

// Cart data
let cart = [];

// View Menu of a restaurant
function viewMenu(restaurant) {
    const menuSection = document.getElementById('menu-section');
    const menuItemsDiv = document.querySelector('.menu-items');
    menuItemsDiv.innerHTML = ''; // Clear previous menu items

    menus[restaurant].forEach(item => {
        menuItemsDiv.innerHTML += `
            <div class="menu-item">
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>$${item.price}</p>
                <button onclick="addToCart(${item.id}, '${restaurant}')">Add to Cart</button>
            </div>
        `;
    });

    document.querySelector('.restaurant-list').style.display = 'none';
    menuSection.style.display = 'block';
}

// Add item to cart
function addToCart(itemId, restaurant) {
    const item = menus[restaurant].find(item => item.id === itemId);
    cart.push(item);
    document.getElementById('cart-count').textContent = cart.length;
    updateCart();
}

// Go back to restaurant listing
function goBack() {
    document.querySelector('.restaurant-list').style.display = 'block';
    document.getElementById('menu-section').style.display = 'none';
}

// Update the cart section
function updateCart() {
    const cartSection = document.getElementById('cart-section');
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartItemsDiv.innerHTML = ''; // Clear previous cart items
    let total = 0;

    cart.forEach(item => {
        total += item.price;
        cartItemsDiv.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <p>${item.name}</p>
                <p>$${item.price}</p>
            </div>
        `;
    });

    cartTotal.textContent = total;
    cartSection.style.display = 'block';
}
