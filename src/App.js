import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
	state = {
		isLoading: true,
		movies: [],
	};
	// async componentDidMount() {
	//   const moives = await axios.get('https://yts-proxy.now.sh/list_movies.json')
	// }

	getMovies = async () => {
		const moives = await axios.get('https://yts-proxy.now.sh/list_movies.json');
		const {
			data: {
				data: { movies },
			},
		} = moives;
		this.setState({ isLoading: false, movies });

		console.log(movies);
	};

	componentDidMount() {
		this.getMovies();
	}

	render() {
		const { isLoading, movies } = this.state;
		return (
			<div>
				{isLoading
					? 'loading'
					: movies.map((movie) => (
							<Movie
								key={movie.id}
								title={movie.title}
								id={movie.id}
								year={movie.year}
								summary={movie.summary}
								poster={movie.medium_cover_image}
								genres={movie.genres}
							/>
					  ))}
			</div>
		);
	}
}

export default App;
