export function calculateSubtotal(cart) {
    return cart.reduce(function(total, item) {
        return total + (item.price * item.quantity);
    }, 0);
}

export function calculateTax(subtotal) {
    return subtotal * 0.10;
}

export function calculateTotal(subtotal, tax) {
    return subtotal + tax;
}