import React, { useState, useEffect } from "react";

import { Navbar } from "./components";
import { Cart } from "./components";
import { Products } from "./components";
import { Checkout } from "./components";

import { commerce } from "./lib/commerce"; // Gets all the functions of commerce.js API to the main file

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // "Routes" was previously called "switc"
import "./app.css";
import Commerce from "@chec/commerce.js";
import { Grid } from '@material-ui/core';

import Product from "./components/Products/Product/Product";
import useStyles from "./components/Products/styles"

const App = (onAddToCart) => {
  const [products, setProducts] = useState([]); // example of a hook
  const [cart, setCart] = useState({}); //Oject
  const [order, setOrder] = useState({});
  const [errorMessage, seterrorMessage] = useState("");
  const [query, setQuery] = useState("");
  const classes = useStyles();

  /* A Hook is a special function that lets you 
  “hook into” React features. For example, useState is a Hook that lets 
  you add React state to function components. */

  //arrow function, loop that Fetch Products
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  //call cart API from commerse.js
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  //function that adds product (refered as productId) and quantity to the cart

  const handleAddToCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);

    //Cart after the item is added
    setCart(response.cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      seterrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts(); //calls function above
    fetchCart();
  }, []);

  console.log(products);
  console.log(cart);

  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <Products products={products} onAddToCart={handleAddToCart} />
            }
            handleUpdateCartQty
          />
          <Route
            exact
            path="/cart"
            element={
              <Cart
                cart={cart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
              />
            }
          />
          {/*https://www.youtube.com/watch?v=UjHT_NKR_gU*/}
          <Route
            exact
            path="/checkout"
            element={
              <Checkout
                cart={cart}
                order={order}
                onCaptureCheckout={handleCaptureCheckout}
                error={errorMessage}
              />
            }
          />
        </Routes>

       
      </div>
    </Router>
  );
};

export default App;
