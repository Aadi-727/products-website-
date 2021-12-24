import "./quantity.css";
import { PlusSmIcon, MinusSmIcon } from "@heroicons/react/solid";
const Quantity = () => {
	return (
		<div className="quantity">
			<MinusSmIcon className="value__op" />
			<h3 className="value">0</h3>
			<PlusSmIcon className="value__op" />
		</div>
	);
};

export default Quantity;
