import CartItem from "./CartItem";

function Cart({
    cart,
    onIncrease,
    onDecrease,
    onRemove,
    subtotal,
    tax,
    total,
    onCheckout
}) {
    return (
        <section id="cartSection">
            <h2>Shopping Cart</h2>

            <div id="cartContainer">
                {cart.map(function(item) {
                    return (
                        <CartItem
                            key={item.id}
                            item={item}
                            onIncrease={onIncrease}
                            onDecrease={onDecrease}
                            onRemove={onRemove}
                        />
                    );
                })}
            </div>

            <div className="cart-summary">
                <p>Subtotal: ₹{subtotal.toFixed(2)}</p>

                <p>Tax (10%): ₹{tax.toFixed(2)}</p>

                <h3>Total: ₹{total.toFixed(2)}</h3>

                <button onClick={onCheckout}>
                    Checkout
                </button>
            </div>
        </section>
    );
}

export default Cart;