import React, { useState, useEffect } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from "@material-ui/core"
import useStyles from './styles'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import { Link } from 'react-router-dom'
import { commerce } from '../../../lib/commerce'
const steps = ['Shipping address', 'Payment details'];


const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
    //This code  and has the logic for the personal data part  
    //useState defines the progress of the checkout
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({})
    const classes = useStyles();

    useEffect(() => {

        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                console.log(token)
                setCheckoutToken(token);
            } catch (error) {
                console.log(error)
            }
        };

        generateToken();

    }, [cart]);

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
    //function containing instructions on how to take the user input from address form
    const next = (data) => {
        setShippingData(data);
        nextStep();
    }


    let Confirmation = () => order.customer ? (
        <>
            <div>
                <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}</Typography>
                <Divider className={classes.divider} />
                <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
            </div>
            <br />
            <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
        </>
    ) : (
        <>
            <Typography
                style={{
                    textAlign: 'center',
                    color: '#000000',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlignVertical: 'center',
                    alignContent: 'center',
                }} variant="h4">Your order has been placed. </Typography>
            <br />
            <Typography style={{
                    textAlign: 'center',
                    color: '#000000',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlignVertical: 'center',
                    alignContent: 'center',
                }} variant="h6">- Thank you for your purchase -</Typography>
                <Button component={Link} to="/" variant="outlined" type="button" style={{
                    textAlign: 'center',
                    color: '#000000',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlignVertical: 'center',
                    alignContent: 'center',
                }}>Back to Home</Button>

        </>
    );

    if (error) {
        <>
            <Typography variant="h5">Error: {error}</Typography>
            <br />
            <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>

        </>
    }


    //Function return info to the web depending on which part the user is in
    const Form = () => activeStep === 0
        ? <AddressForm checkoutToken={checkoutToken} next={next} />
        : <PaymentForm checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} shippingData={shippingData} onCaptureCheckout={onCaptureCheckout} />

    return (
        <>
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                </Paper>
            </main>
        </>
    );
};

export default Checkout
