import React, { useEffect, useContext } from "react";
import { Jumbotron, Button, Card, ButtonGroup } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const CharactersCard = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card displaycards p-1 m-2" style={{ width: "18rem" }}>
			<img
				src="https://img.vixdata.io/pd/jpg-large/es/sites/default/files/l/luke-skywalker-last-jedi.jpeg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">Gender: {props.gender} </p>
				<p className="card-text">Hair Color: {props.hair_color}</p>
				<p className="card-text">Eye-Color: {props.eye_color}</p>
				<div className="btn-group" role="group" aria-label="Basic mixed styles example">
					<Link to={"/characters/" + props.pos}>
						<button type="button" className="btn btn-primary m-1">
							Learn more!
						</button>
					</Link>
					{store.favorites.includes(props.name) ? null : (
						<Button onClick={() => actions.setFavorites(props.name)} variant="outline-warning">
							<i className="fas fa-heart" />
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};

CharactersCard.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	hair_color: PropTypes.string,
	eye_color: PropTypes.string,
	pos: PropTypes.number
};
