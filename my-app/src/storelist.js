import React from 'react';
import { Button, IconButton, List, ListItem, Divider, ListItemText, AppBar, Toolbar, Typography, InputBase, Grid } from '@material-ui/core/';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import dislogo from './whitedisjoin.png';
import walmartlogo from './Walmart-Logo.png';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import './style.css';
import GaugeChart from 'react-gauge-chart';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    toolbar: {
      minHeight: 50,
      alignItems: 'flex-start',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
      backgroundColor: "#019AE8"
    },
    search: {
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "white",
        marginLeft: 0,
        width: '100%',
      },
    smallbutton: {
        padding: "5%",
        color: "#FFF", 
        minHeight: "0%",
        backgroundColor: "#019AE8", 
        fontSize: "0.6em",
        width: "100%",
    }
}));
  
function StoreList() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>     
            <Grid container direction="column">
                <Grid container direction="row"
                    justify="flex-start"
                    alignItems="center">
                    <Grid item xs={1} style={{padding: "0.25%"}}>
                        <IconButton
                                    edge="start"
                                    className={classes.menuButton}
                                    color="inherit"
                                    aria-label="open drawer"
                                    
                                >
                                    <MenuIcon />
                        </IconButton>
                        </Grid>
                    <Grid item xs={3} style={{padding: "5.25% 2% 2% 2%"}}>
                        <Link to="/" style={{textDecoration: "none"}}>
                            <img src={dislogo} style={{width: "90%"}} />    
                        </Link>
                    </Grid>
                    <Grid item xs={8}>
                        <div></div>
                    </Grid>
                </Grid>
                <Grid container direction="row"
                    justify="center"
                    alignItems="center" spacing={1}>
                    <div className={classes.search}>
                        <InputBase
                        placeholder="Enter the store/ location you plan to visit"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        style={{fontSize: "0.7em", paddingLeft: "2%"}}
                        fullWidth
                        />
                    </div>
                </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Typography style={{textAlign: "center", paddingTop: "2%"}}>
            <b>NEARBY STORES</b>
        </Typography>
        <List style={{padding: 0}}>
            <ListItem alignItems="flex-start">
                <div>
                    <Grid container direction="row"
                    justify="center"
                    alignItems="center" spacing={1}>
                        <Grid item xs={3}>
                            <img className="logo" alt="Walmart logo" src={walmartlogo}/>
                        </Grid>
                        <Grid item xs={9} container>
                            <Grid direction="row" container>
                                <Grid item xs={11} style={{padding:"0.5%"}}>
                                    <Typography style={{fontSize: "0.7em"}}>
                                        <b>Walmart</b>
                                    </Typography>
                                    <Typography style={{fontSize: "0.5em"}}>
                                        Chino Spectrum Towne Center 3943 Grand Ave, Chino, United States. CA 91710
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
                                    <GaugeChart id="gauge1" 
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
            <Divider variant="middle" component="li" />
            <ListItem alignItems="flex-start">
                <div>
                    <Grid container direction="row"
                    justify="center"
                    alignItems="center" spacing={1}>
                        <Grid item xs={3}>
                            <img className="logo" alt="Walmart logo" src={walmartlogo}/>
                        </Grid>
                        <Grid item xs={9} container>
                            <Grid direction="row" container>
                                <Grid item xs={11} style={{padding:"0.5%"}}>
                                    <Typography style={{fontSize: "0.7em"}}>
                                        <b>Walmart</b>
                                    </Typography>
                                    <Typography style={{fontSize: "0.5em"}}>
                                        Chino Spectrum Towne Center 3943 Grand Ave, Chino, United States. CA 91710
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
                                    <GaugeChart id="gauge2"
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
            <Divider variant="middle" component="li" />
            <ListItem alignItems="flex-start">
                <div>
                    <Grid container direction="row"
                    justify="center"
                    alignItems="center" spacing={1}>
                        <Grid item xs={3}>
                            <img className="logo" alt="Walmart logo" src={walmartlogo}/>
                        </Grid>
                        <Grid item xs={9} container>
                            <Grid direction="row" container>
                                <Grid item xs={11} style={{padding:"0.5%"}}>
                                    <Typography style={{fontSize: "0.7em"}}>
                                        <b>Walmart</b>
                                    </Typography>
                                    <Typography style={{fontSize: "0.5em"}}>
                                        Chino Spectrum Towne Center 3943 Grand Ave, Chino, United States. CA 91710
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
                                    <GaugeChart id="gauge3"
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
            <Divider variant="middle" component="li" />
            <ListItem alignItems="flex-start">
                <div>
                    <Grid container direction="row"
                    justify="center"
                    alignItems="center" spacing={1}>
                        <Grid item xs={3}>
                            <img className="logo" alt="Walmart logo" src={walmartlogo}/>
                        </Grid>
                        <Grid item xs={9} container>
                            <Grid direction="row" container>
                                <Grid item xs={11} style={{padding:"0.5%"}}>
                                    <Typography style={{fontSize: "0.7em"}}>
                                        <b>Walmart</b>
                                    </Typography>
                                    <Typography style={{fontSize: "0.5em"}}>
                                        Chino Spectrum Towne Center 3943 Grand Ave, Chino, United States. CA 91710
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
                                    <GaugeChart id="gauge4" 
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
            <Divider variant="middle" component="li" />
            <ListItem alignItems="flex-start">
                <div>
                    <Grid container direction="row"
                    justify="center"
                    alignItems="center" spacing={1}>
                        <Grid item xs={3}>
                            <img className="logo" alt="Walmart logo" src={walmartlogo}/>
                        </Grid>
                        <Grid item xs={9} container>
                            <Grid direction="row" container>
                                <Grid item xs={11} style={{padding:"0.5%"}}>
                                    <Typography style={{fontSize: "0.7em"}}>
                                        <b>Walmart</b>
                                    </Typography>
                                    <Typography style={{fontSize: "0.5em"}}>
                                        Chino Spectrum Towne Center 3943 Grand Ave, Chino, United States. CA 91710
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
                                    <GaugeChart id="gauge5"
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
            
        </List>
      </div>
    );
}

export default StoreList;


