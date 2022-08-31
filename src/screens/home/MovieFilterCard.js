import React from 'react';
import Card from '@material-ui/core/Card';
import {Typography, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
// import { makeStyles } from '@material-ui/styles';
import { FormControl, CardContent, Button, Input, InputLabel, TextField, Select, MenuItem } from '@material-ui/core';
import "./MovieFilterCard.css";

// const theme = createMuiTheme();

// // const useStyles = makeStyles(theme => ({
// //     formControl: {
// //         margin: theme.spacing(1),
// //         minWidth: 240,
// //     }
// // }));

// const useStyles = makeStyles({
//     formControl: {
//     //   margin: theme.spacing(1),
//       minWidth: 120,
//     },
//     selectEmpty: {
//     //   marginTop: theme.spacing(2),
//     },
//   });

export default function MovieFilterCard(props) {

    console.log(props.genres)
    
    // const classes = useStyles();

    return (   
                <div>
                <Button disabled>Test Button</Button>
                {/* <MuiThemeProvider theme={theme}> */}
                    <Card className="card-style" variant="outlined" color="primary">
                        <CardContent >
                            <Typography color="primary">
                                FIND MOVIES BY
                            </Typography>
                            <br />

                    
                    
                            <FormControl className="form-control">
                                <InputLabel htmlFor="name" >Movie Name</InputLabel>
                                <Input id="name"></Input>
                            </FormControl>
                            <br />

                            <FormControl className="form-control">
                                <InputLabel Id="genre-filter-selection">Genre</InputLabel>
                                <Select>
                                    {
                                        props.genres.map(genre => (
                                            <MenuItem value={genre}>
                                                {genre}
                                            </MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                            <br />
                            <br />


                            <FormControl className="form-control">
                                <InputLabel>Artists</InputLabel>
                                <Select>
                                    {
                                        props.artists.map(artist => (
                                            <MenuItem value={artist}>
                                                {artist}
                                            </MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                            <br />
                            <br />


                            <FormControl className="form-control">
                                {/* <InputLabel Id='release-data-start' shrink="true">Release Date Start</InputLabel> */}
                            
                                <TextField 
                                    label="Release Date Start"
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}>

                                </TextField>
                            </FormControl>
                            <br />
                            <br />

                            <FormControl className="form-control">
                                {/* <InputLabel Id='release-date-end' shrink="true">Release Date End</InputLabel> */}
                                <TextField 
                                    label="Release Date End"
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}>

                                </TextField>
                            </FormControl>
                            <br />
                            <br />

                            <FormControl className="form-control">
                                <Button variant="contained" color="primary">APPLY</Button>
                            </FormControl>
                        </CardContent>
                    </Card>
                {/* </MuiThemeProvider> */}
                </div>
            )
}