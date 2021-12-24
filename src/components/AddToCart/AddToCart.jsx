import "./add-to-cart.css";
import { ShoppingCartIcon } from "@heroicons/react/outline";
const AddToCart = () => {
	return (
		<button className="btn__add-to-cart">
			<ShoppingCartIcon className="icon__cart" />
			<h4>Add To Cart</h4>
		</button>
	);
};

export default AddToCart;
