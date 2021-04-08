import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Image, DropdownButton, Dropdown, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

export const NavbarMenu = () => {
	const { store, actions } = useContext(Context);

	/*const removePeople(e) {
    let array = [...this.state.people]; // make a separate copy of the array
    let index = array.indexOf(e.target.value)
    if (index !== -1) {
        array.splice(index, 1);
        this.setState({people: array});
    }
    }*/
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
			<Nav className="mr-auto">
				<Link className="nav-link" to="/planets">
					<section id="navlink">Planets</section>
				</Link>
				<Link className="nav-link" to="/characters">
					<section id="navlink">Characters</section>
				</Link>
			</Nav>
			<DropdownButton id="dropdown-basic-button" title={`Favoritos ${store.favorites.length}`}>
				{store.favorites.map((item, index) => {
					return (
						<Dropdown.Item key={index}>
							<a>{item}</a>
							<Button className="fas fa-trash-alt" />
						</Dropdown.Item>
					);
				})}
			</DropdownButton>
		</Navbar>
	);
};
