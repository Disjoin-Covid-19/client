import React from 'react';
import { IconButton, List, Divider, AppBar, Toolbar, Typography, InputBase, Grid } from '@material-ui/core/';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import dislogo from './whitedisjoin.png';
import walmartlogo from './Walmart-Logo.png';
import './style.css';
import StoreListItem from './storeListItem'

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
}));
  
function StoreList() {
    const classes = useStyles();
    // const storeList = [
    //     {
    //         name: "Walmart",
    //         address: "Chino Spectrum Towne Center 3943 Grand Ave, Chino, United States. CA 91710",
    //         logoSrc: { walmartlogo }
    //     },
    //     {
    //         name: "Walmart2",
    //         address: "Chino Spectrum Towne Center 3943 Grand Ave, Chino, United States. CA 91710",
    //         logoSrc: { walmartlogo }
    //     },
    //     {
    //         name: "Walmart3",
    //         address: "Chino Spectrum Towne Center 3943 Grand Ave, Chino, United States. CA 91710",
    //         logoSrc: { walmartlogo }
    //     },
    // ];

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
            <StoreListItem 
                name="Walmart"
                address="Chino Spectrum Towne Center 3943 Grand Ave, Chino, United States. CA 91710"
                logoSrc={ walmartlogo }                
                />
            <Divider variant="middle" component="li" />
            <StoreListItem 
                name="Walmart"
                address="Chino Spectrum Towne Center 3943 Grand Ave, Chino, United States. CA 91710"
                logoSrc={ walmartlogo }                
                />
            <Divider variant="middle" component="li" />

            <StoreListItem 
                name="Walmart"
                address="Chino Spectrum Towne Center 3943 Grand Ave, Chino, United States. CA 91710"
                logoSrc={ walmartlogo }
                />
            <Divider variant="middle" component="li" />
            <StoreListItem 
                name="Walmart"
                address="Chino Spectrum Towne Center 3943 Grand Ave, Chino, United States. CA 91710"
                logoSrc={ walmartlogo }                
                />
            <Divider variant="middle" component="li" />
            <StoreListItem 
                name="Walmart"
                address="Chino Spectrum Towne Center 3943 Grand Ave, Chino, United States. CA 91710"
                logoSrc={ walmartlogo }                
                />
            <Divider variant="middle" component="li" />
            <StoreListItem 
                name="Walmart"
                address="Chino Spectrum Towne Center 3943 Grand Ave, Chino, United States. CA 91710"
                logoSrc={ walmartlogo }
                />

        </List>
      </div>
    );
}

export default StoreList;


