import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, /*MenuItem*/ /*Menu*/ Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/fis-logo.jpg'; /*Image of the logo */
import useStyles from './styles';
import { Link } from 'react-router-dom'

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h5" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="50px" className={classes.image} />
                        Computer Science IA
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton component = {Link} to="/cart" aria-label='Show cart items' color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
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
export default Navbar;