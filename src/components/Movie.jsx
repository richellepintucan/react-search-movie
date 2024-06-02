import PropTypes from 'prop-types';
import { IoCalendarOutline } from 'react-icons/io5';
import { FaHeart } from 'react-icons/fa';

import './Movie.css';
import { useState } from 'react';

const Movie = ({ movie }) => {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked((prev) => !prev);
    };
    return (
        <div className={`movie-container ${liked ? 'yes' : 'no'}`}>
            <div className="movie-poster">
                <img src={movie.Poster} alt={movie.Title} />
            </div>

            <div className="movie-details">
                <h2>{movie.Title}</h2>\
                <p>
                    <IoCalendarOutline color="white" size={24} /> {movie.Year}
                </p>
                <div className="like-btn-container ">
                    <button className="like-button" onClick={toggleLike}>
                        <FaHeart color={liked ? 'red' : 'white'} size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

Movie.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Year: PropTypes.string.isRequired,
        Poster: PropTypes.string.isRequired
    })
};

export default Movie;
