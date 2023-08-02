import { Link } from "react-router-dom";
import "./navbar.css"

function Navbar() {
  return (
    <nav>
      <header>
        <h1>
          <Link className = "header-link" to="/">Home</Link>
        </h1>
        <p>
          <Link className="cart-link" to="/">Cart</Link>
        </p>
      </header>
    </nav>
  );
}

export default Navbar;
