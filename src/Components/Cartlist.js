import { useSelector } from "react-redux"

function CartList() {
    const cart = useSelector ((state) => state.cart.cart);
    return <div></div>;
}

export default CartList;