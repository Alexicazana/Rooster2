import { Grid, Paper, TextField, Typography, Button, FormControl, FormControlLabel, Checkbox } from '@material-ui/core';
import React from 'react'

const SignUp=()=> {
    
    const paperStyle={padding:'20px', height:'33vh', width:300, margin:"0 auto"}
    const headerStyle={margin:0}
    const marginTop={margin:10}

    return(
            <Grid>
                <Paper style={paperStyle}>
                    <Grid align='center'>
                        <h2 style={headerStyle}>Sign Up</h2>
                        <Typography variant='caption' gutterBottom>Please fill this form</Typography>
                    </Grid>
                    <form>
                        <TextField fullWidth id='username' label='Username' placeholder="Enter your username"/>
                        <TextField fullWidth id='phoneNumber' label='Phone Number' placeholder="Enter your phone number"/>
                        <TextField fullWidth id='password' label='Password' placeholder="Enter your password"/>
                        <TextField fullWidth id='confirmPassword' label='Confirm Password' placeholder="Please confirm your password"/>

                        <FormControlLabel
                            control={<Checkbox name="checkedA"/>}
                            label="I accept the terms and conditions."/>

                        <Button type='submit' variant='contained' color='primary'>Sign Up</Button>
                    </form>
                </Paper>
            </Grid>
    )
}

export default SignUp;