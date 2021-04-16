const getState = ({ getStore, setStore }) => {
	return {
		store: {
			planetsList: [],
			peopleList: [],
			favorites: []
		},
		actions: {
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
				console.log(">>DATAPlanets>>", json);
				setStore({ planetsList: json.results });
			},
			setFavorites: name => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, name] });
			},
			removePeople: favId => {
				const store = getStore();
				let deletedFavs = [];
				store.favorites.map(function(item, index) {
					if (favId != index) {
						deletedFavs.push(item);
					}
				});
				setStore({ favorites: deletedFavs });
			}
		}
	};
};
export default getState;
