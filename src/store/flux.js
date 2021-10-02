const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			movies: [],
			tv: [],
			people: [],
			movieDetails: [],
			tvDetails: [],
			peopleDetail: [],
			home: [],
			upcoming: [],
			trending: [],
			favoritos: []
		},
		actions: {

			addFav: favorito => {
				setStore({
					// favoritos = favoritos en store + lo nuevo que viene por el parametro
					favoritos: getStore().favoritos.concat(favorito)
				});
			},
			removFav: favorito => {
				setStore({
					favourites: getStore().favoritos.filter(function (item, index) {
						// return favorito.id !== item.id;
						if (favorito.id !== item.id) {
							return item;
						}
					})
				});
			},

			//funcion de ejemplo para hacer peticiones fetch
			loadMovies: () => {
				fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_}`)
					.then((response) => response.json())
					.then(data => setStore({ movies: data.results }));
			},

			loadTv: () => {
				fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_MOVIE_}`)
					.then((response) => response.json())
					.then(data => setStore({ tv: data.results }));

			},

			loadPeople: () => {
				fetch(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_MOVIE_}`)
					.then((response) => response.json())
					.then(data => setStore({ people: data.results }));

			},

			loadMovieDetails: (id) => {
				fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_}`)
					.then((response) => response.json())
					.then(data => setStore({ moviesDetails: data.results }));
			},

			loadUpComing: () => {
				fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIE_}`)
					.then(response => response.json())
					.then(data => setStore({ upcoming: data.results }));

			},
			loadTrending: () => {
				fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_}`)
					.then(response => response.json())
					.then(data => setStore({ trending: data.results }));

			},
			loadCarousel: () => {
				fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIE_}`)
				.then(response => response.json())
				.then(data=>setStore({home:data.results}));

			},

		}

	}
};


export default getState;