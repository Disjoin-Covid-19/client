import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { Button, Typography, Grid } from '@material-ui/core/';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import stock from "./stockimg.jpg";
import logo from "./disjoin.png";
import './style.css';

class PicCarousel extends React.Component {
    render() {
        return(
            <Carousel showArrows={true} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={7500}>
                <div>
                    <img src={stock} className="images"/>
                </div>
                <div>
                    <img src={stock} className="images"/>
                </div>
                <div>
                    <img src={stock} className="images"/>
                </div>
            </Carousel>
        )
    }
}

const useStyles = makeStyles((theme) => ({
    item: {
        paddingTop: "2%",
        margin: theme.spacing(1),
    },
}));

function Landing() {
    const classes = useStyles();
    return (
        <div style={{"textAlign": "center"}}>  
            <PicCarousel />
            <Grid container direction="column"
            justify="flex-start"
            alignItems="center">
                <Grid item className={classes.item}>
                    <Typography>
                        <b>Stay safe & shop with ease</b>
                    </Typography>
                </Grid>
                <Grid item className={classes.item}>
                    <Typography style={{fontSize: "0.6em", color: "#A09C9C"}}>
                        Disjoin assists you to plan WHEN and WHERE you
                        <br />
                        can fulfill your grocery needs.
                    </Typography>
                </Grid>
                <Grid item className={classes.item}>
                    <img alt="Disjoin logo" src={logo} style={{width: "12em", padding: "3%"}}/>
                </Grid>
                <Grid item className={classes.item}>
                    <Link to="/stores" style={{textDecoration: "none"}}>
                        <Button
                            variant="contained"
                            style={{color: "#FFF", backgroundColor: "#019AE8"}}
                            startIcon={<BookmarkIcon />}
                        >
                            BOOK YOUR SLOT
                        </Button>
                    </Link>
                </Grid>
            </Grid>

        </div>
    )
}
export default Landing;