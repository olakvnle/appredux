import "./cartitem.css"
function Cartitems({ product}){
    return (
        <div className = "product-section" >
            <div className = "product-container">
                <div className="">
        <img className="product-image" src = {product.image} alt = {product.title}/>
        </div>
        <div className="price-group">
            <p className="product-text">{product.title}</p>
            <p className="product-price">{product.price}</p>
        </div>
        <div>
            <p>{product.description}</p>
        </div>
    
    <div>
        <p>{product.decription}</p>
    </div>
    <div>
        <button className="btn">Add to cart</button>
        <button className="btn-one">Clear All</button>
    </div>
    </div>
    </div>

    );
}
export default Cartitems;