import React, { useEffect, useContext } from "react";
import { Jumbotron, Button, Card } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPeople();
	}, []);
	return (
		<Jumbotron>
			<h1 id="mainTitle">Characters Gallery</h1>
			<div className="cardsCont">
				{store.peopleList.map((item, index) => {
					return (
						<div key={index} className="displayCards">
							<Card style={{ width: "18rem;" }}>
								<Card.Img
									variant="top"
									src="https://i.emezeta.com/weblog/lado-oscuro-galletas.jpg"
									className="imgCard"
								/>
								<Card.Body>
									<h3>{item.name}</h3>
									<p>{item.gender}</p>
									<p>{item.hair_color}</p>
									<p>{item.eye_color}</p>
									{store.favorites.includes(item.name) ? null : (
										<Button
											onClick={() => actions.setFavorites(item.name)}
											variant="outline-warning">
											<i className="fas fa-heart" />
										</Button>
									)}
								</Card.Body>
							</Card>
						</div>
					);
				})}
			</div>
		</Jumbotron>
	);
};
