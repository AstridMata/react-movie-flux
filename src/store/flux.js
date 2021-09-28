const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			movies: [],
			tv: [],
			people: [],
			movieDetails: [],
			tvDetails: [],
			peopleDetail: []
		},
		actions: {

			//funcion de ejemplo para hacer peticiones fetch
			loadMovies: () => {

				fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_}`)
					.then((response) => response.json())
					.then(data => setStore({ movies: data.result }));
				},

			loadTv: () => {

				fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_MOVIE_}`)
					.then((response) => response.json())
					.then(data => setStore({ tv: data.result }));

			},

			loadPeople: () => {

				fetch(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_MOVIE_}`)
					.then((response) => response.json())
					.then(data => setStore({ people: data.result }));

			},

			loadMovieDetails: (id) => {

				fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_}`)
					.then((response) => response.json())
					.then(data => setStore({ moviesDetails: data.result }));
			},

			loadUpComing: () => {
				fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIE_}`)
				.then(response => response.json())
				.then(data=>setStore({upcoming:data.results}));

			},
			loadTrending: () => {
				fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_}`)
				.then(response => response.json())
				.then(data => setStore({trending:data.results}));

			},

		}

	}
};


export default getState;