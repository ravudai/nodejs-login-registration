import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    paper: {
        margin: theme.spacing(8,4),
    },
    mainContainer: {
        backgroundImage: new URL('./images/bg.jpg'),
    }.
    signinPanel: { 
        padding: 10,
        margin: '20px auto',
        height: '60vh',
        minHeight: '600px',
        width: '20vw',
        minWidth: '300px',
    },
    centerText: {
        textAlign: 'center',
    },
}));

export default useStyles;