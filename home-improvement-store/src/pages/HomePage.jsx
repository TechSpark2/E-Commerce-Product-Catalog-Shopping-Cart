import { useState } from "react";

import products from "../data/products";

import Header from "../components/Header";
import CategoryFilter from "../components/CategoryFilter";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

import {
    calculateSubtotal,
    calculateTax,
    calculateTotal
} from "../utils/cartUtils";


function Home() {
    const [cart, setCart] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState("All");

    let filteredProducts = products;

    if (selectedCategory !== "All") {
        filteredProducts = products.filter(function(product) {
            return product.category === selectedCategory;
        });
    }

    function addToCart(productId) {
        const product = products.find(function(item) {
            return item.id === productId;
        });

        const existingProduct = cart.find(function(item) {
            return item.id === productId;
        });

        if (existingProduct) {
            setCart(
                cart.map(function(item) {
                    if (item.id === productId) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        };
                    }

                    return item;
                })
            );
        } else {
            setCart([
                ...cart,
                {
                    ...product,
                    quantity: 1
                }
            ]);
        }
    }

    function increaseQuantity(productId) {
        setCart(
            cart.map(function(item) {
                if (item.id === productId) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    };
                }

                return item;
            })
        );
    }

    function decreaseQuantity(productId) {
        setCart(
            cart.map(function(item) {
                if (item.id === productId && item.quantity > 1) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    };
                }

                return item;
            })
        );
    }

    function removeFromCart(productId) {
        setCart(
            cart.filter(function(item) {
                return item.id !== productId;
            })
        );
    }

    const subtotal = calculateSubtotal(cart);
    const tax = calculateTax(subtotal);
    const total = calculateTotal(subtotal, tax);

    const cartCount = cart.reduce(function(total, item) {
        return total + item.quantity;
    }, 0);

    function checkout() {
        if (cart.length === 0) {
            alert("Your cart is empty.");
            return;
        }

        alert("Order placed successfully!");

        setCart([]);
    }

    return (
        <>
            <Header cartCount={cartCount} />

            <section className="controls">
                <CategoryFilter
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                />
            </section>

            <main>
                <h2>Products</h2>

                <ProductList
                    products={filteredProducts}
                    onAddToCart={addToCart}
                />
            </main>

            <Cart
                cart={cart}
                onIncrease={increaseQuantity}
                onDecrease={decreaseQuantity}
                onRemove={removeFromCart}
                subtotal={subtotal}
                tax={tax}
                total={total}
                onCheckout={checkout}
            />
        </>
    );
}

export default Home;