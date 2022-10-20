import React, {useState} from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';
import { Link } from "react-router-dom";

/*const products = [
    { id: 1, name: 'Shoes', description: '- Running shoes.', price: '$5', image: 'https://brand.assets.adidas.com/f_auto,q_auto,fl_lossy/capi/deDE/Images/running-fw19-pb-educate-site-story-secondary7-d_188-373465.jpg'},
    { id: 2, name: 'MacBook', description: 'Computer', price: '$15', image: 'https://www.bhphotovideo.com/images/images500x500/apple_z11b_myd8_07_bh_13_3_macbook_pro_with_1605032111_1604817.jpg'},
];*/
const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();
    const [query, setQuery] = useState("");
    return (
        <main className={classes.content}>
        <div className={classes.toolbar}/>

            <Grid countainer justify="center" container spacing={6}>
                {products.map((product) => (
                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3} >
                        <Product product={product} onAddToCart={onAddToCart}/>
                    </Grid>
                ))}
            </Grid>
            {/*Bellow is the search algorithm*/}
            <div className="app" xs={12} sm={6} md={4} lg={3}>
               <input xs={12} sm={6} md={4} lg={3}
                   type="text"
                   placeholder="Search a Book"
                   className="search"
                   onChange={(e) => setQuery(e.target.value)}
               />
               <ul className="list" >
                   {products
                   .filter((product) => product.name.toLowerCase().includes(query))
                   .map((product) => (
                       <li className="listItem">
                       <li>{product.name}</li>
                       <li style={{ fontWeight: 'bold' }}>{product.price.formatted_with_symbol}</li>
 
                       </li>
                   ))}
               </ul>
               </div>
        </main>
        
    )

}

export default Products; 

