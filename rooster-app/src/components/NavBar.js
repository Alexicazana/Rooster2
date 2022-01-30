import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
//import { NavLink } from "react-router-dom";


/*
const NavBar = () => {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        React Homepage 
                    </NavLink>
                </div>
                <div>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">
                                Login
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/alarms">
                                Alarms
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )

} 

*/


const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        React & mui
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>

    )
} 
export default NavBar;





<Stack.Screen
    name="HomeScreen"
    component={HomeScreen}
    options={{
    headerRight: () => (
        <Button
        onPress={() => alert('Clicked !!')}
        title="menu"
        color="#000"
        />
    ),
    }}
/>