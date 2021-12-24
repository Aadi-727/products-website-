import "./showcase.css";
import { Thumbnail } from "../../components";
import productImages from "../imports";
const { product1, product2, product3, product4 } = productImages;
const Showcase = () => {
	return (
		<div className="showcase">
			<div className="left">
				<div className="showcase__main-image">
					<img src={product1.image} alt="product1" />
				</div>
				<div className="showcase__image-thumbnail">
					<Thumbnail image={product1.thumb} alt="product1" />
					<Thumbnail image={product2.thumb} alt="product2" />
					<Thumbnail image={product3.thumb} alt="product3" />
					<Thumbnail image={product4.thumb} alt="product4" />
				</div>
			</div>

			<div className="right">Right Show</div>
		</div>
	);
};

export default Showcase;
