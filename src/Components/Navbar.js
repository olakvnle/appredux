import { Link } from "react-router-dom";
import { useSelector } from "react-redux"
import "./navbar.css"

function Navbar() {
  const cart = useSelector ((state) => state.cart.cart);

function getTotalQty() {
  let total = 0;
  cart.forEach((item) => {
    total += item.quantity;
  });
  return total;
}

  return (
    <nav>
      <header>
        <h1>
          <Link className = "header-link" to="/">Home</Link>
        </h1>
        <div className="cart-qty">
<p>          <Link className="cart-link" to="/">Cart</Link></p>
<span> {getTotalQty() === 0 ? null : getTotalQty()} </span>
        </div>
      </header>
    </nav>
  );
}

export default Navbar;
