import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Image, DropdownButton, Dropdown, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

export const NavbarMenu = () => {
	const { store, actions } = useContext(Context);

	return (
		<Navbar>
			<Navbar.Brand>
				<Link to="/">
					<Image
						src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"
						height="40"
						alt="Star Wars"
					/>
				</Link>
			</Navbar.Brand>
			<Nav className="mr-auto" />
			<DropdownButton id="dropdown-basic-button" title={`Favoritos ${store.favorites.length}`}>
				{store.favorites.map((item, index) => {
					return (
						<Dropdown.Item key={index}>
							{item}
							<Button className="fas fa-trash-alt" onClick={() => actions.removePeople(index)} />
						</Dropdown.Item>
					);
				})}
			</DropdownButton>
		</Navbar>
	);
};
