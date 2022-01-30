import React,{useState} from 'react'
import {AppBar, ArrowBack, Box} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';


const Navbar=()=>{

    return(
        <Box components="nav">
            <AppBar position="static" style={{background: "#222"}}>
                <Toolbar>
                    <IconButton>
                        <ArrowBack style={{background: "tomato"}}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
};



export default Navbar;