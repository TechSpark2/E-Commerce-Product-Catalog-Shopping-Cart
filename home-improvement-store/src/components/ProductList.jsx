import ProductCard from "./ProductCard";

function ProductList({ products, onAddToCart }) {
    return (
        <div className="product-container">
            {products.map(function(product) {
                return (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={onAddToCart}
                    />
                );
            })}
        </div>
    );
}

export default ProductList;