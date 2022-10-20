import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LikeButton from './LikeButton'
const Product = ({ product, onAddToCart }) => {

    const classes = useStyles();

    const Algo = () => {
        var value = parseInt(document.getElementById('number').value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        document.getElementById('number').value = value;
    }

    //product.media is a preset variable name that can be viewed in the console
    //return(<div>test</div>)

    return (

        <Card className={classes.root} variant="top">

            <CardMedia className={classes.media} image={product.image.url} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterbottom>
                        <Link to="/cart">{product.name}</Link>

                    </Typography>


                    <Typography variant="h5" gutterbottom>
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <button onClick={Algo}>Click</button>





                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" />
                {/*Like button */}





            </CardContent>

            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>

        </Card>



    );
}

export default Product;