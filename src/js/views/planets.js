import React, { useEffect, useContext } from "react";
//import { Button, Card } from "react-bootstrap";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Planets = () => {
	const { planetsid } = useParams();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPlanets();
	}, []);
	return (
		<>
			<div className="card">
				<div className="card-horizontal row col-md">
					<div className="img-square-wrapper">
						<img
							className=""
							src="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest/scale-to-width-down/403?cb=20131214162357"
							alt="Card image cap"
						/>
					</div>
					<div className="card-body">
						<h1>{store.planetsList[planetsid].name}</h1>
						<p className="card-text">Lorem ipsum text</p>
					</div>
				</div>
				<div
					className="card-footer"
					style={{ color: "red", display: "inline-flex", borderTopColor: "red", margin: "auto" }}>
					<h6 style={{ padding: "5px", margin: "5px" }}>
						<p>Rotation Period:</p>
						{store.planetsList[planetsid].rotation_period}
					</h6>
					<h6 style={{ padding: "5px", margin: "5px" }}>
						<p>Diameter:</p>
						{store.planetsList[planetsid].diameter}
					</h6>
					<h6 style={{ padding: "5px", margin: "5px" }}>
						<p>Population:</p>
						{store.planetsList[planetsid].population}
					</h6>
					<h6 style={{ padding: "5px", margin: "5px" }}>
						<p>Terrain:</p>
						{store.planetsList[planetsid].terrain}
					</h6>
					<h6 style={{ padding: "5px", margin: "5px" }}>
						<p>Gravity:</p>
						{store.planetsList[planetsid].gravity}
					</h6>
				</div>
			</div>
		</>
	);
};
