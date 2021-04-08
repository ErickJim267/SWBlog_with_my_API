const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planetsList: [],
			peopleList: [],
			favorites: []
		},
		actions: {
			fetchPlanets: async () => {
				const URL = "https://swapi.dev/api/planets/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();
				console.log(">>DATA>>", json);
				setStore({ planetsList: json.results });
			},

			fetchPeople: async () => {
				const URL = "https://swapi.dev/api/people/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();
				console.log(">>DATA>>", json);
				setStore({ peopleList: json.results });
			},
			setFavorites: name => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, name] });
			}
		}
	};
};
export default getState;
