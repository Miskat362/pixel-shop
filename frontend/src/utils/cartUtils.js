
export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
    state.itemPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));
    state.taxPrice = addDecimals(Number(state.itemPrice * 0.15).toFixed(2)); // 15% tax
    state.shippingPrice = addDecimals(state.itemPrice > 100 ? 0 : 10);
    state.totalPrice = addDecimals(state.itemPrice + state.taxPrice + state.shippingPrice);

    localStorage.setItem('cart', JSON.stringify(state));

    return state;
};