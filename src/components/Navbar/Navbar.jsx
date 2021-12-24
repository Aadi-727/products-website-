import "./Navbar.css";
import { navbarData } from "./navbarData";
import { logo, cart, avatar, ham, close } from "../imports";
import { useState, useEffect } from "react";

const Navbar = () => {
	const [menu, setMenu] = useState(false);
	const [showHam, setShowHam] = useState(true);
	const [showBackDrop, setShowBackDrop] = useState(false);
	const [showClose, setShowClose] = useState(false);

	const toggle = () => {
		setMenu(!menu);
		setShowBackDrop(!showBackDrop);
		setShowClose(!showClose);
		setShowHam(!showHam);
	};
	useEffect(() => {
		if (window.innerWidth > 768) {
			setMenu(true);
			setShowHam(false);
			setShowBackDrop(false);
			setShowClose(false);
		}
	}, []);

	return (
		<div className="bar__container">
			{/* Backdrop */}
			<div
				className="backdrop"
				style={{ display: showBackDrop ? "inherit" : "none" }}
				onClick={toggle}
			></div>

			<nav className="navbar">
				{/* Logo */}
				<div className="navbar__left">
					<img
						style={{ display: showHam ? "block" : "none" }}
						src={ham}
						alt="Open Side menu"
						className="menu__ham"
						onClick={toggle}
					/>
					<img className="navbar__logo" src={logo} alt="Sneakers logo" />
					{/* Nav links */}
					<img
						className="menu__close"
						src={close}
						alt="close"
						style={{
							display: showClose ? "block" : "none",
						}}
						onClick={toggle}
					/>

					{/*? Menu */}
					<ul
						className="navbar__nav-items"
						style={{ display: menu ? "flex" : "none" }}
					>
						{navbarData.map((item, id) => (
							<li key={id}>
								<a href={item.route}>{item.title}</a>
							</li>
						))}
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
		</div>
	);
};
export default Navbar;
