function ProductCard({ product, onAddToCart }) {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <p>₹{product.price}</p>

            <p>⭐ {product.rating}</p>

            <button onClick={() => onAddToCart(product.id)}>
                Add to Cart
            </button>
        </div>
    );
}

export default ProductCard;