const products = [
    {
        id: 1,
        name: "Cordless Drill",
        category: "Tools",
        price: 4299,
        rating: 4.5,
        description: "20V cordless drill for home projects",
        image: "images/drill.jpg"
    },
    {
        id: 2,
        name: "Claw Hammer",
        category: "Tools",
        price: 799,
        rating: 4.3,
        description: "Strong steel hammer for everyday use",
        image: "images/hammer.jpg"
    },
    {
        id: 3,
        name: "Screwdriver Set",
        category: "Tools",
        price: 1199,
        rating: 4.6,
        description: "Multi-size screwdriver set",
        image: "images/screwdriver.jpg"
    },
    {
        id: 4,
        name: "LED Bulb",
        category: "Electrical",
        price: 299,
        rating: 4.4,
        description: "Energy efficient LED bulb",
        image: "images/led-bulb.jpg"
    },
    {
        id: 5,
        name: "Extension Board",
        category: "Electrical",
        price: 699,
        rating: 4.2,
        description: "Extension board with multiple sockets",
        image: "images/extension-board.jpg"
    },
    {
        id: 6,
        name: "Smart Light Switch",
        category: "Electrical",
        price: 1499,
        rating: 4.5,
        description: "Smart switch for home lighting",
        image: "images/smart-switch.jpg"
    },
    {
        id: 7,
        name: "Kitchen Faucet",
        category: "Plumbing",
        price: 2499,
        rating: 4.6,
        description: "Modern faucet for kitchen sinks",
        image: "images/faucet.jpg"
    },
    {
        id: 8,
        name: "Shower Head",
        category: "Plumbing",
        price: 1299,
        rating: 4.3,
        description: "Water-saving shower head",
        image: "images/shower-head.jpg"
    },
    {
        id: 9,
        name: "PVC Pipe Set",
        category: "Plumbing",
        price: 899,
        rating: 4.1,
        description: "PVC pipe set for basic plumbing work",
        image: "images/pvc-pipe.jpg"
    }
];

const productContainer = document.getElementById("productContainer");

function displayProducts(productList) {
    productContainer.innerHTML = "";

    productList.map(function(product) {
        productContainer.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <p>₹${product.price}</p>

                <p>⭐ ${product.rating}</p>

                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
}

displayProducts(products);

let cart = [];

function addToCart(productId) {
    const product = products.find(function(item) {
        return item.id === productId;
    });

    const existingProduct = cart.find(function(item) {
        return item.id === productId;
    });

    if (existingProduct) {
    existingProduct.quantity++;
} else {
    cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
    });
}

    console.log(cart);
    displayCart();
    updateCartCount();
    updateCartTotal();
}

function displayCart() {
    const cartContainer = document.getElementById("cartContainer");

    cartContainer.innerHTML = "";

    cart.map(function(item) {
        cartContainer.innerHTML += `
            <div class="cart-item">
                <p>${item.name}</p>
                <p>₹${item.price}</p>
                <div>
    <button onclick="decreaseQuantity(${item.id})">-</button>
    <span>${item.quantity}</span>
    <button onclick="increaseQuantity(${item.id})">+</button>
    <button onclick="removeFromCart(${item.id})">Remove</button>
    </div>
            </div>
         `;
    });
}

function increaseQuantity(productId) {
    const item = cart.find(function(product) {
        return product.id === productId;
    });

    item.quantity++;

    displayCart();
    updateCartCount();
    updateCartTotal();
}

function decreaseQuantity(productId) {
    const item = cart.find(function(product) {
        return product.id === productId;
    });

    if (item.quantity > 1) {
        item.quantity--;
    }

    displayCart();
    updateCartCount();
    updateCartTotal();
}

function removeFromCart(productId) {
    cart = cart.filter(function(item) {
        return item.id !== productId;
    });

    displayCart();
    updateCartCount();
    updateCartTotal();
}

function updateCartCount() {
    const cartCount = document.getElementById("cartCount");

    cartCount.textContent = cart.reduce(function(total, item) {
        return total + item.quantity;
    }, 0);
}

function updateCartTotal() {
    const subtotal = cart.reduce(function(total, item) {
        return total + (item.price * item.quantity);
    }, 0);

    const tax = subtotal * 0.10;
    const total = subtotal + tax;

    document.getElementById("subtotal").textContent = subtotal.toFixed(2);
    document.getElementById("tax").textContent = tax.toFixed(2);
    document.getElementById("total").textContent = total.toFixed(2);
}

const categoryButtons = document.querySelectorAll(".category-btn");

categoryButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const category = button.dataset.category;

        if (category === "All") {
            displayProducts(products);
        } else {
            const filteredProducts = products.filter(function(product) {
                return product.category === category;
            });

            displayProducts(filteredProducts);
        }
    });
});

const checkoutBtn = document.getElementById("checkoutBtn");

checkoutBtn.addEventListener("click", function() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    alert("Order placed successfully!");

    cart = [];

    displayCart();
    updateCartCount();
    updateCartTotal();
});