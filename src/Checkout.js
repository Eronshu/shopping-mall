import * as React from "react";
import { message } from "antd";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "./components/AddressForm";
import PaymentForm from "./components/PaymentForm";
import Review from "./components/Review";
import BillingAddressForm from "./components/BillingAddressForm";
import { useState } from "react";
import { addAddress } from "./api/addressApi";
import { createOrder, processPayment } from "./api/orderApi";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Shipping address", "Review your order", "Payment details"];

const theme = createTheme();

export default function Checkout(props) {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutData, setCheckoutData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    province: "",
    zip: "",
    country: "",
    phone: "",
    billingStreet: "",
    billingCity: "",
    billingProvince: "",
    billingZip: "",
    billingCountry: "",
    billingPhone: "",
  });
  const [cardInfo, setCardInfo] = useState({
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  const [addressID, setAddressID] = useState("");
  const [orderID, setOrderID] = useState("");

  const processCheckout = async () => {
    const addressID = await addAddress(checkoutData);
    const orderID = await createOrder(
      checkoutData.firstName,
      checkoutData.lastName,
      addressID
    );
    return processPayment(
      orderID,
      cardInfo.cardNumber,
      cardInfo.expDate,
      cardInfo.cvv
    );
  };

  const handleNext = async () => {
    try {
      switch (activeStep) {
        case 0:
          const aID = await addAddress(checkoutData);
          setAddressID(aID);
          debugger;
          break;
        case 1:
          const oID = await createOrder(
            checkoutData.firstName,
            checkoutData.lastName,
            addressID
          );
          setOrderID(oID);
          debugger;

          break;
        case 2:
          await processPayment(
            orderID,
            cardInfo.cardNumber,
            cardInfo.expDate,
            cardInfo.cvv
          );
          props.setData([]);
          debugger;

          break;
        default:
      }
      setActiveStep(activeStep + 1);
    } catch (err) {
      message.error(err.response.data.msg);
    }
  };

  const handleBack = (isSkip) => {
    setActiveStep(activeStep - 1);
    if (activeStep === 2 && isSkip) setActiveStep(activeStep - 2);
  };
  const [isSkip, setIsSkip] = useState(false);

  function getStepContent(step, isSkip, setIsSkip) {
    if (step === 1 && isSkip) {
      step = 2;
      setActiveStep(2);
    }
    switch (step) {
      case 0:
        return (
          <AddressForm
            data={checkoutData}
            setData={setCheckoutData}
            isSkip={isSkip}
            setIsSkip={setIsSkip}
          />
        );
      case 1:
        return <Review cart={props.data} />;
      case 2:
        return <PaymentForm cardInfo={cardInfo} setCardInfo={setCardInfo} />;
      default:
        throw new Error("Unknown step");
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Team G shopping mall
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #{orderID}. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
              <Link href="/" variant="body2">
                continue shopping
              </Link>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep, isSkip, setIsSkip)}
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
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              </Box>
              <Link href="/" variant="body2">
                back to shopping mall
              </Link>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
