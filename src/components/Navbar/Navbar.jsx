import "./Navbar.css";
import { logo, cart, avatar } from "../imports";
const Navbar = () => {
	return (
		<nav className="navbar">
			{/* Logo */}
			<div className="navbar__left">
				<img className="navbar__logo" src={logo} alt="Sneakers logo" />
				{/* Nav links */}
				<ul className="navbar__nav-items">
					<li>
						<a href="/collections">Collections</a>
					</li>
					<li>
						<a href="/men">Men</a>
					</li>
					<li>
						<a href="/women">Women</a>
					</li>
					<li>
						<a href="about">About</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
				</ul>
			</div>

			{/* Actions */}
			<div className="navbar__right">
				<div className="navbar__actions">
					<img className="icon__cart" src={cart} alt="" />

					<img className="avatar" src={avatar} alt="User Image" />
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
