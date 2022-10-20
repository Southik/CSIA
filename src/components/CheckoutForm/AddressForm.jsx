import React, { useState, useEffect, useRef } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";

import { commerce } from '../../lib/commerce';
import FormInput from './CustomTextField';
import emailjs from '@emailjs/browser';


const AddressForm = ({ checkoutToken, next }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');
  const methods = useForm();

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ideb7vy', 'template_g3qf6mx', form.current, '-e9cA2gBUb0LcY8jS')
      .then((result) => {
        console.log(result.text);
        alert("Email was sent successfully")

      }, (error) => {
        console.log(error.text);
      });
  };
    const form1 = useRef();


    const sendEmailone = (e) => {
      e.preventDefault();

    emailjs.sendForm('service_548ziki', 'template_x5arfhb', form1.current, 'u-0kCqhU9wBDUpb_a')
      .then((result) => {
        console.log(result.text);
        alert("Email was sent successfully")

      }, (error) => {
        console.log(error.text);
      });
    };

  //ref={form} onClick={sendEmail}
  const WhiteTextTypography = withStyles({
    root: {
      color: "#FFFFFF"
    }
  })(Typography);
  return (
    <>
      <Typography variant="h6" >Shipping address</Typography>
      <FormProvider {...methods} ref={form} onSubmit={sendEmail}>
        {console.log("working #1")}
        <form onSubmit={methods.handleSubmit((data) => next({ data }))} >

          <Grid container spacing={3}>


            {/*<FormInput required name="user_name" label="First name" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="address1" label="Address line 1" />
            {/*<FormInput required name="user_email" label="Email" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" label="Zip / Postal code" />*/}

          </Grid>

          <br />
          <div >
            {/*<Button component={Link} variant="outlined" to="/cart">Back to Cart</Button>*/}
            <Button type="submit" variant="contained" color="primary" value="Send" >Next page</Button>

          </div>
        </form>
{/*------------------------------------------------------------------------------------------------- */}
        <form ref={form} onSubmit={sendEmail}>
          
          <Grid container spacing={3}>


            <FormInput required name="a1" label="First name" />
            <FormInput required name="user_email" label="Email" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="address1" label="Address line 1" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" label="Zip / Postal code" />
            <input name="message1" value="Thanks a lot for your order, your order will be delivered in a few days" type="hidden"></input>

            
          </Grid>

          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} variant="outlined" to="/cart">Back to Cart</Button>
            <Button type="submit" variant="contained" color="secondary" value="Send" >Send email #1</Button>

          </div>
        </form>
        {/*---------------------------------------------------------------------------------------------------*/}
        <form ref={form1} onSubmit={sendEmailone}>
          
          <Grid container spacing={3}>


            <input required name="user_name" label="First name" type="hidden" />
            <input required name="user_email" label="Email" type="hidden" />


            
          </Grid>

          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button type="submit" variant="contained" color="secondary" value="Send1" >Send email #2</Button>

          </div>
        </form>
         
      </FormProvider>


    </>
  );
};

export default AddressForm;

