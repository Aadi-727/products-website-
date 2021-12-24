import "./showcase.css";
import { AddToCart, Quantity, Thumbnail } from "../../components";
import productImages from "../imports";
const { product1, product2, product3, product4 } = productImages;
const Showcase = () => (
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

		<div className="showcase__right">
			<h6>SNEAKER COMPANY</h6>
			<h1>Fall Limited Edition Sneakers</h1>
			<p>
				These low-profile sneakers are your perfect casual wear campion.
				Feautring a durable rubber outer sole, they'll withstand everything the
				winter can offer{" "}
			</p>
			<div className="price">
				<h1 className="price__amount">
					$125.00 <span className="offer">50%</span>
				</h1>
				<span className="price__grey">$250.00</span>
			</div>

			<div className="operations">
				<Quantity />
				<AddToCart />
			</div>
		</div>
	</div>
);

export default Showcase;
