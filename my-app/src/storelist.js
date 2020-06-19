import React from 'react';
import { IconButton } from '@material-ui/core/';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom";


function StoreList() {
    return (
        <Link to="/storeinfo">
            <IconButton edge="start" color="inherit" aria-label="back">
                <ArrowBackIcon />
            </IconButton>
        </Link>
    )
}

export default StoreList;


