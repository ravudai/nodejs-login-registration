import { Button, Checkbox, FormControlLabel, Grid, Paper, TextField } from '@material-ui/core';
import React from 'react';
import useStyles from '../styles';

function SignIn() {
    const classes = useStyles();
    return (
        <Grid container className={classes.mainContainer}>
            <Paper elevation={10} className={classes.signinPanel}>
                <Grid className={classes.centerText}>
                    <h2>SignIn</h2>
                </Grid>
                <Grid item>
                    <Grid>
                        <form>
                            <TextField name="email" id="email" placeholder="Enter email" label="Email" autoComplete="email" fullWidth autoFocus />
                            <TextField name="password" fullWidth id="password" placeholder="Enter password" label="Password" type="password" />
                            <Grid>
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                            </Grid>
                            <Button type="submit" fullWidth color="primary" variant="contained">Sign In</Button>
                        </form>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
}

export default SignIn;