import React from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Paprt';
import Tab from '@material-ui/core/Tab';

const SignInOutContainer=()=> {
    const [value,setValue]=useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return(
        <Paper square>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <Tab label="Active"/>
                <Tab label="Disabled" disabled/>
                <Tab label="Active"/>
            </Tabs>
        </Paper>
    )
    
}

export default SignInOutContainer;