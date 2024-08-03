import { useSelector, useDispatch } from "react-redux";
import "./cartitem.css";
import {addToCart, removeAll} from "../Redux/cartSlice";
function Cartitems({ id, title, image, price, description }){
    const cart = useSelector ((state) => state.cart.cart);
    const dispatch = useDispatch();

    return (
        <div className = "product-section" >
            <div className = "product-container">
                <div className="">
        <img className="product-image" src = {image} alt = {title}/>
        </div>
        <div className="price-group">
            <p className="product-text">{title}</p>
            <p className="product-price">{price}</p>
        </div>
        <div>
            <p>{description}</p>
        </div>
    <div className="btn-group">
        <button onClick = {() => dispatch (addToCart ({ id, title, image, price, description}))} className="btn">Add to cart</button>
        <button onClick = {() => dispatch (removeAll ())} className="btn-one">Clear All</button>
    </div>
    </div>
    </div>
    );
}
export default Cartitems;