import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({ title, summary, poster, year, genres }) => {
	return (
		<div>
			<h5>
				{title} /<span>{year}</span>
			</h5>
			<p>{summary}</p>
			<img src={poster} alt={title} />
			<ul>
				{genres.map((genre, idx) => (
					<li key={idx}>{genre}</li>
				))}
			</ul>
		</div>
	);
};

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
