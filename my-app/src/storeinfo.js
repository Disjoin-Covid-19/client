import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Typography, Toolbar, Divider, Grid, AppBar, IconButton } from '@material-ui/core/';
import GaugeChart from 'react-gauge-chart';
import logo from './Walmart-Logo.png';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';
import getStoreInfo from './services/storeInfoService';
import './style.css';

const useStyles = theme => ({
    typography: {
        fontFamily: 'Roboto',
    },
    button: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    section1: {
        margin: theme.spacing(1.5),
    },
    small: {
        fontSize: "0.1em",
        padding: "1%",
    }
});

class StoreInfo extends React.Component {
    state = {
        storeData: null
    };

    componentDidMount() {
        // This method gets invoked when the component loads into the DOM
        // This is where you typically want to make calls to load data, etc.
        getStoreInfo(123)
            .then(data => {
                console.log(`Store Data: ${JSON.stringify(data)}`);
                this.setState({storeData: data});
            });
    }
    
    render() {
        const { classes } = this.props;
        // This is checking to see if the data has been loaded yet - if not, don't try to render
        // Could also put up a loading spinner or similar.
        if(!this.state.storeData) {
            return <div />
        };

        return (
            <div>
            <h1>Store data</h1>
            <ul>
                {this.state.storeData
                    .map(entry =>
                        <li>ID: {entry.id}, Count: {entry.count}, Timestamp: {entry.timestamp}</li> 
                    )
                }
            </ul>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="back">
                        <ArrowBackIcon />
                    </IconButton>
                    <div style={{marginLeft: "auto"}}>
                        <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="heart">
                            <FavoriteBorderIcon />
                        </IconButton>
                        <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Grid container direction="column"
            justify="flex-start"
            alignItems="center">
                <Grid item>
                    <div className={classes.section1}>
                        <Grid container direction="row"
                        justify="center"
                        alignItems="center" spacing={1}>
                            <Grid item xs={3}>
                                <img className="logo" src={logo}/>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography className="title">
                                    <b>Walmart</b>
                                </Typography>
                                <Typography style={{fontSize: "0.5em"}}>
                                    Chino Spectrum Towne Center 3943 Grand Ave, Chino, United States. CA 91710
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                    <Divider variant="middle" />
                    <div className={classes.section1}>
                        <Grid container className={classes.button} style={{"textAlign": "center"}}>
                            <Button variant="outlined" style={{color: "#03C981"}}><b>Subscribe to this store</b></Button>
                            <Typography className={classes.small}>
                                Click on subscribe to receive alerts for the best time to visit this store
                            </Typography>
                        </Grid>
                    </div>
                </Grid>
                <Grid style={{backgroundColor: "#F4F4F4", "width": "100%", "height": "0.5em"}}>
                </Grid>
                <Grid item style={{"textAlign": "center"}} xs={12} className={classes.section1}>
                    <Typography>
                        <b>FOOT TRAFFIC</b>
                    </Typography>
                    <Grid container className={classes.button}>
                        <GaugeChart id="gauge-chart3" 
                        nrOfLevels={25}
                        textColor={"#000"}
                        needleColor={"#C8CACF"}
                        needleBaseColor={"#000"}
                        colors={["#3AAEFF", "#37B75B", "#F3DC41", "#F9741B", "#FF0101"]} 
                        arcWidth={0.3} 
                        percent={0.37} 
                        />
                        <Typography className={classes.small}>
                            Current foot traffic that you can expect at this store.
                        </Typography>
                        <Button
                            variant="contained"
                            style={{color: "#FFF", backgroundColor: "#019AE8"}}
                            startIcon={<BookmarkIcon />}
                        >
                            BOOK YOUR SLOT
                        </Button>
                    </Grid>
                </Grid>
                <Grid style={{backgroundColor: "#F4F4F4", "width": "100%", "height": "0.5em"}}>
                </Grid>
                <Grid item xs={12} className={classes.section1}>
                    <Typography>
                        <b>EXPECTED FOOT TRAFFIC ON APRIL 20, 2020</b>
                    </Typography>   
                </Grid>
            </Grid>
        </div>
        );
    }
}

export default withStyles(useStyles)(StoreInfo);