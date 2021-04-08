import React, { useEffect, useContext } from "react";
import { Jumbotron, Button, Card } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.fetchPlanets();
	}, []);
	return (
		<Jumbotron>
			<h1 id="mainTitle">PLANETS</h1>
			<Card style={{ width: "18rem" }}>
				<Card.Img
					variant="top"
					src="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest/scale-to-width-down/403?cb=20131214162357"
				/>
				<Card.Body>
					{store.planetsList.map((item, index) => {
						return (
							<li key={index}>
								<span>{item.name}</span>
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
