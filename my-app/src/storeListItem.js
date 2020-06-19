import React from 'react';
import { Button, IconButton, ListItem, Typography, Grid } from '@material-ui/core/';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import './style.css';
import GaugeChart from 'react-gauge-chart';
import uniqueId from 'lodash.uniqueid';

const useStyles = makeStyles((theme) => ({
    smallbutton: {
        padding: "5%",
        color: "#FFF", 
        minHeight: "0%",
        backgroundColor: "#019AE8", 
        fontSize: "0.6em",
        width: "100%",
    }
}));
  
function StoreListItem(props) {
    const chartId = uniqueId("chart-");
    const classes = useStyles();
    return (
        <ListItem alignItems="flex-start">
            <div>
                <Grid container direction="row"
                justify="center"
                alignItems="center" spacing={1}>
                    <Grid item xs={3}>
                        <img className="logo" alt="Walmart logo" src={props.logoSrc}/>
                    </Grid>
                    <Grid item xs={9} container>
                        <Grid direction="row" container>
                            <Grid item xs={11} style={{padding:"0.5%"}}>
                                <Typography style={{fontSize: "0.7em"}}>
                                    <b>{props.name}</b>
                                </Typography>
                                <Typography style={{fontSize: "0.5em"}}>
                                    {props.address}                                    
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <IconButton color="inherit" aria-label="heart" style={{paddingLeft: 0}}>
                                    <FavoriteBorderIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid direction="row" container>
                            <Grid item xs={3}>                                
                                <GaugeChart id={chartId}
                                    nrOfLevels={25}
                                    hideText={true}
                                    animate={false}
                                    needleColor={"#C8CACF"}
                                    needleBaseColor={"#000"}
                                    colors={["#3AAEFF", "#37B75B", "#F3DC41", "#F9741B", "#FF0101"]} 
                                    arcWidth={0.3} 
                                    percent={0.37} 
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <div></div>
                            </Grid>
                            <Grid item xs={6}>
                                <Link to="/storeinfo" style={{textDecoration: "none"}}>
                                    <Button
                                        variant="contained"
                                        startIcon={<BookmarkIcon />}
                                        className={classes.smallbutton}
                                    >
                                        <b>BOOK YOUR SLOT</b>
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>  
                    </Grid>
                </Grid>
            </div>
        </ListItem>
    );
}

export default StoreListItem;


