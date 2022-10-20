import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, /*MenuItem*/ /*Menu*/ Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/fis-logo.jpg'; /*Image of the logo */
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="unherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                        Computer Science (Internal Assesment)
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label='Show cart items' color="ingerit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}
/*classes.grow, means that the image can take as much room needed(responsive)*/
export default Navbar