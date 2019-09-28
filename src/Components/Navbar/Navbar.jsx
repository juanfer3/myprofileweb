import React from 'react';

import './Navbar.css'

import {
    AppBar,
    Toolbar,
    Typography,
    Button
} from '@material-ui/core';

const Navbar = () =>(
    <AppBar className="navbar" position="static">
    <Toolbar>
      <Typography className="title_navbar" variant="h6">
        News
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
)

export default Navbar;