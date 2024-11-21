import {FaShoppingCart} from "react-icons/fa";
import "./Navbar.css"
function CartWidget() {
    return(
        <div className="carrito">
            <FaShoppingCart/>
            <span className="badge">5</span>
        </div>
    )
}

export default CartWidget