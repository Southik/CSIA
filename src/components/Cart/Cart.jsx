import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
//import { mergeClasses } from '@material-ui/styles';
import useStyles from './styles';
//import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom'
import CartItem from './CartItem/CartItem';
import Product from '../Products/Product/Product';
import Products from '../Products/Products'
const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart, products}) => {

    // if the value of cart is anything but 0, this statement will be true
    const classes = useStyles();
    //Function that would be callled if cart is empty

    const EmptyCart = () => (
        <Typography variant="subtitle1">No items are added to the shopping carty<Link to="/" className="classes.link">- Add Products to Cart -</Link></Typography>
    );
    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <div>
                            <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart } />
                        </div>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart }>Empty Cart</Button>
                    <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>

    );
    //--> if the cart is empty, show empty cart 
    // else show filled carts

    if (!cart.line_items) return 'Loading...';


    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h4"  style={{fontWeight: 'bold', textDecorationLine: 'underline'}} gutterBottom>Your Shopping Cart</Typography>
            {!cart.line_items.length ? EmptyCart() : FilledCart()}

            {/*Recomendation system */}
            
        </Container>
       
    );
}

export default Cart;