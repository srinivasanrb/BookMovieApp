import React, {Component, Fragment, useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';
import { ReactDOM  } from "react";
import Header from '../../common/header/Header';
import MovieFilterCard from './MovieFilterCard';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar'; 
import '../home/Home.css';

const Home = (props) => {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [artists, setArtists] = useState([]);
    
    let history = useHistory();

    useEffect(() => {
        fetch(props.baseUrl + "/movies?page=1&limit=17")
            .then(input => input.json())
            .then(data => {
                console.log("data: ", data);

                const genreSet = new Set();
                const artistsSet = new Set();

                data.movies.forEach(movie => {
                    movie.genres.forEach(genre => genreSet.add(genre));
                    if (movie.artists)
                        movie.artists.forEach(artist => artistsSet.add(artist["first_name"]));
                })
               
                const genres = [...genreSet];
                const artists = [...artistsSet];

                setMovies(data.movies);
                setArtists(artists);
                setGenres(genres)
            });

        console.log(movies);
    }, []);

    const movieClickHandler = (movieId) => {
        console.log("handle for movie -->", movieId);
        history.push(`/movie/${movieId}`);
    };

    return (
        <Fragment>
            <Header bookShow={false}/>
            <div className="upcoming-movies-heading">
                Upcoming Movies
            </div>

            <div className="upcoming-movies-container">
                <GridList cellHeight={250} className="upcoming-movies-gridlist" cols={6} >
                    {
                        movies.filter((movie) => (movie.status == "PUBLISHED"))
                            .map((publised) => ( 
                                    <GridListTile key={publised.id}>
                                        <img src={publised.poster_url} alt={publised.title}  />
                                        <GridListTileBar title={publised.title} />
                                    </GridListTile>
                                ))
                    }
                </GridList>
            </div>

            <div className="release-movies-section">
                <div className="flex-container">
                    <div className="released-movies-container" style={{width: "76%"}}>
                        <GridList cellHeight={350} className='released-movies-grid' cols={4}>
                            {
                                movies.filter(movie => (movie.status == "RELEASED"))
                                    .map(movie => (                                    
                                    <GridListTile key={movie.id}>
                                        <img src={movie.poster_url} alt={movie.title} style={{cursor: "pointer"}}  onClick={() => movieClickHandler(movie.id)}/>
                                        <GridListTileBar title={movie.title} />
                                    </GridListTile>
                                ))
                            }
                        </GridList>
                    </div>

                    <div style={{width: "24%"}}>
                        <MovieFilterCard artists={artists} genres={genres}/>
                    </div>
                </div>
            </div>                   
        </Fragment>
    )       
} 

export default Home;
