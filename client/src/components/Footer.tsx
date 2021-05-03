import { Typography } from '@material-ui/core';
import React from 'react';

function Footer() {
    return (
        <Typography>
            { 'Copyright © '} FAM { new Date().getFullYear()}
        </Typography>
    );

}

export default Footer;
