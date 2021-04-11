import React, { useContext, useState } from "react";
import { Jumbotron } from "react-bootstrap";
import { Context } from "../store/appContext";
//import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { CharactersCard } from "../component/charactersCard.js";
import { PlanetsCard } from "../component/planetsCard.js";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [carga, setCarga] = useState(false);

	setInterval(() => {
		store.peopleList.length > 0 && store.planetsList.length > 0 ? setCarga(true) : "";
	}, 2000);
	//
	return (
		<div>
			<Jumbotron className="cardsCont">
				<h1 id="mainTitle">Characters Gallery</h1>
				{carga ? (
					<div>
						{store.peopleList.map((item, index) => {
							return (
								<div key={index} className="displayCards">
									<CharactersCard
										name={item.name}
										gender={item.gender}
										hair_color={item.hair_color}
										eye_color={item.eye_color}
										pos={index}
									/>
								</div>
							);
						})}
					</div>
				) : (
					""
				)}
			</Jumbotron>
			<Jumbotron className="cardsCont">
				<h1 id="mainTitle">Planets Gallery</h1>
				{carga ? (
					<div>
						{store.planetsList.map((item, index) => {
							return (
								<div key={index} className="displayCards">
									<PlanetsCard
										name={item.name}
										rotation_period={item.rotation_period}
										climate={item.climate}
										terrain={item.terrain}
										population={item.population}
										pos={index}
									/>
								</div>
							);
						})}
					</div>
				) : (
					""
				)}
			</Jumbotron>
		</div>
	);
};
