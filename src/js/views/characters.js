import React, { useEffect, useContext } from "react";
//import { Button, Card } from "react-bootstrap";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Characters = () => {
	const { charactersid } = useParams();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPeople();
	}, []);
	return (
		<>
			<div className="card">
				<div className="card-horizontal">
					<div className="img-square-wrapper">
						<img
							className=""
							src="https://img.vixdata.io/pd/jpg-large/es/sites/default/files/l/luke-skywalker-last-jedi.jpeg"
							alt="Card image cap"
						/>
					</div>
					<div className="card-body">
						<h1>{store.peopleList[charactersid].name}</h1>
						<p className="card-text">Lorem ipsum text</p>
					</div>
				</div>
				<div
					className="card-footer"
					style={{ color: "red", display: "inline-flex", borderTopColor: "red", margin: "auto" }}>
					<h6 style={{ padding: "5px", margin: "5px" }}>
						<p>Gender:</p>
						{store.peopleList[charactersid].gender}
					</h6>
					<h6 style={{ padding: "5px", margin: "5px" }}>
						<p>Birth Year:</p>
						{store.peopleList[charactersid].birth_year}
					</h6>
					<h6 style={{ padding: "5px", margin: "5px" }}>
						<p>Height:</p>
						{store.peopleList[charactersid].height}
					</h6>
					<h6 style={{ padding: "5px", margin: "5px" }}>
						<p>Skin Color:</p>
						{store.peopleList[charactersid].skin_color}
					</h6>
					<h6 style={{ padding: "5px", margin: "5px" }}>
						<p>Eye Color:</p>
						{store.peopleList[charactersid].eye_color}
					</h6>
				</div>
			</div>
		</>
	);
};
