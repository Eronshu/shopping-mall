import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import { makeStyles } from '@mui/styles'
import {Link} from "react-router-dom";

const ShippingInformation = () => {
    return (
        <>
            <Typography variant="h6" gutterBottom>
                Shipping Information
            </Typography>
        </>
    );
}

const BillingInformation = () => {
    return (
        <>
            <Typography variant="h6" gutterBottom>
                Billing Information
            </Typography>
        </>
    );
}

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing(5),
        paddingBottom: theme.spacing(2)
    },
    title: {
        marginTop: theme.spacing(2),
        color: theme.palette.openTitle
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 300
    },
    btn: {
        margin: 'auto',
        marginBottom: theme.spacing(2)
    }
}))

const CreditCard = () => {

    const classes = useStyles()

    const [values, setValues] = useState({
        number: '',
        name: '',
    })

    const clickSubmit = () => {
        const card = {
            name: values.name || undefined,
            number: values.number || undefined
        }
    }

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h6" className={classes.title}>
                    Add a credit card
                </Typography>
                <TextField id="cardNumber"  label="Card number" className={classes.textField} value={values.number} onChange={handleChange('number')} margin="normal"/><br/>
                <TextField id="name" label="Name on card" className={classes.textField} value={values.name} onChange={handleChange('name')} margin="normal"/><br/>
            </CardContent>
            <CardActions>
                <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.btn}>Add your card</Button>
            </CardActions>
        </Card>
    );
}

const steps = ['Shipping', 'Billing', 'Credit Card', 'Finish!'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <ShippingInformation />;
        case 1:
            return <BillingInformation />;
        case 2:
            return <CreditCard />;
        default:
            throw new Error('Unknown step');
    }
}

const Checkout = () => {

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <div>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper
                    variant="outlined"
                    sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
                >
                    <Typography component="h1" variant="h4" align="center">
                        Check Out
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length - 1 ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Finish!
                                </Typography>
                                <Typography variant="subtitle1">
                                    Order Successfully Completely.
                                </Typography>
                                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                                    <Link to='/'>
                                    <Button variant="contained" sx={{ mt: 3, ml: 1 }}>
                                        OK
                                    </Button>
                                    </Link>
                                </Box>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep)}
                                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                                    {activeStep !== 0 && (
                                        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                            Back
                                        </Button>
                                    )}

                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 3, ml: 1 }}
                                    >
                                        {activeStep === steps.length - 2 ? "Sumit" : "Next"}
                                    </Button>
                                </Box>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                </Paper>
            </Container>
        </div>
    );

};

export default Checkout;