import React, { useEffect, useContext } from "react";
import { Jumbotron, Button, Card } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Characters = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.fetchPeople();
	}, []);
	return (
		<Jumbotron>
			<h1 id="mainTitle">CHARACTERS</h1>
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src="https://i.emezeta.com/weblog/lado-oscuro-galletas.jpg" />
				<Card.Body>
					{store.peopleList.map((item, index) => {
						return (
							<li key={index}>
								{item.name}
								{store.favorites.includes(item.name) ? null : (
									<Button onClick={() => actions.setFavorites(item.name)} variant="outline-warning">
										<i className="fas fa-heart" />
									</Button>
								)}
							</li>
						);
					})}
				</Card.Body>
			</Card>
		</Jumbotron>
	);
};
