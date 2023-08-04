import { useDispatch, useSelector } from "react-redux"
import Navbar from "../Components/Navbar"
import { incrementQuantity, decrementQuantity, removeOne, } from "../Redux/cartSlice";
import "./cart.css"

function Cart() {
    const carts = useSelector ((state) => state.cart.cart);
    const dispatch = useDispatch();

    carts.forEach((item) => {
        const { price, quantity } = item;
        return price * quantity;
    });

function getGrandTotal() {
    let totalPrice = 0;
    let totalQty = 0;

    carts.forEach((item) => {
        totalPrice += item.price += item.price * item.quantity;
        totalQty += item.quantity;
    });
    return { totalPrice, totalQty };
}
return (
    <>
    <Navbar/>
    <section className="product-cart_container">
        <div className="product_main">
            {carts?.map ((cart) => {
                const { id, title, image, price, quantity, description } = cart;
                return (
                    <div className="product_sub_main" key = {id}>
                        <div className="product__image_container">
                        <img className="product__img" src = {image} alt = {title} />
                        <div>
                            <p className="product__text">{title}</p>
                        </div>
                        </div>
                        <div className="qty_container">
                        <p>${price}</p>
                        <button onClick={() => dispatch (decrementQuantity(id))}> - </button>
                            <p>{quantity}</p>

                            <button onClick={() => dispatch (incrementQuantity (id))}> + </button>
                    </div>
                    <div>
                        <p>{description}</p>
                    </div>
                    <div>
                        <p> {price * quantity}</p>
                    </div>

                        </div>
                );
            })}
        </div>
        <div>
            <p>Grand Total Price: ${getGrandTotal ().totalPrice}</p>
            <p>Grand Total Quantity : {getGrandTotal().totalQty}</p>
        </div>
    </section>
    </>
);
}

export default Cart;