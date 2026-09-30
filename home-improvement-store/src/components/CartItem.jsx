function CartItem({ item, onIncrease, onDecrease, onRemove }) {
    return (
        <div className="cart-item">
            <p>{item.name}</p>

            <p>₹{item.price}</p>

            <div>
                <button onClick={() => onDecrease(item.id)}>
                    -
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => onIncrease(item.id)}>
                    +
                </button>

                <button onClick={() => onRemove(item.id)}>
                    Remove
                </button>
            </div>
        </div>
    );
}

export default CartItem;