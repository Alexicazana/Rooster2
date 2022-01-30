import { Grid, Paper, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@material-ui/core'
import React from 'react'

const Login=()=>{

    const paperStyle={padding:'20px', height:'33vh', width:300, margin:"0 auto"}
    const avatarStyle={baclgroundColor:'primary'}
    const btStyle={margin:'8px 0'}

    return(
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                        <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth/>
                <TextField label='Password' placeholder='Enter username' fullWidth/>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button type='submit' variant="contained" style={btStyle} color='primary' fullWidth>Sign in</Button>
                <Typography align='left'>
                    <Link href="#">Forgot password?</Link>
                </Typography>
                <Typography align='left'>Not a member yet?
                    <Link href="#">  Sign up</Link>
                </Typography>
            </Paper>
        </Grid>

    )

}

export default Login;