import React, {Component, useEffect, useState, Fragment} from "react";
import {Typography, createMuiTheme, MuiThemeProvider, TextField } from '@material-ui/core';
import { ReactDOM  } from "react";
import Header from '../../common/header/Header';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar'; 
import YouTube from 'react-youtube';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';


import "../details/Details.css";


const Details = (props) => {

    const [movie, setMovie] = useState({});
    const [movieId, setMovideId] = useState("");
    const [genres, setGenres] = useState("");
    const [releaseDate, setReleaseDate] = useState("");

    let history = useHistory();
    
    useEffect(() => {
        const movieId = props.match.params.id;

        fetch(props.baseUrl + "/movies/" + movieId)
            .then(input => input.json())
            .then(data => {
                console.log("data: ", data);
                setMovie(data)
             
                setMovideId(data.trailer_url.split("v=")[1]);

                setGenres(data.genres.join());

                setReleaseDate(new Date(data.release_date).toDateString());
                console.log(movieId);
            });

    }, []);

    const backToHomeHandler = () => {
        history.push(`/`);
    }

    return (
        <Fragment>
            <Header bookShow={true} id={movie.id}/>
            <Button className="back-button" onClick={() => backToHomeHandler()}>Back to Home</Button>
            <div className="flex-container">
                <div className="movie-image-container" style={{width: "20%", margin: "4px"}}>
                    <img src={movie.poster_url} alt={movie.title}  />
                </div>
                <div className="movie-details-container" style={{width: "60%", margin: "4px"}}>
                    <Typography variant="h2">
                        {movie.title}
                    </Typography>
                    <br />
                    <Typography variant="body1">
                        <b>Genre:</b> {genres}
                    </Typography>
                    <Typography variant="body1">
                        <b>Duration:</b> {movie.duration}
                    </Typography>
                    <Typography variant="body1">
                        <b>Release Date:</b> {releaseDate}
                    </Typography>
                    <Typography variant="body1">
                        <b>Rating:</b> {movie.rating}
                    </Typography>
                    <br />
                    <Typography variant="body1">
                        <b>Plot:</b> <a href={movie.wiki_url}>Wiki_Link</a> {movie.storyline}
                    </Typography>
                    <br />
                    <Typography variant="body1">
                        <b>Trailer:</b>
                    </Typography>
                    <YouTube videoId={movieId}>
                    </YouTube>
                </div>

                <div className="movie-rate-container" style={{width: "20%", margin: "4px"}}>
                    <Typography variant="bold">
                        Rate this movie:
                    </Typography>
                    <TextField className="artist-text">

                    </TextField>

                    <GridList cellHeight={250} className="" cols={2} >
                    {
                        movie.artists && movie.artists.map((artist) => ( 
                            <GridListTile>
                                <img src={artist.profile_url} alt={artist.first_name}  />
                                <GridListTileBar title={artist.first_name + " " + artist.last_name} />
                            </GridListTile>
                        ))
                    }
                    </GridList>
                </div>
            </div>

        </Fragment>
    );
}

export default Details;