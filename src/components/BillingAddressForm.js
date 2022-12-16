import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState, useEffect } from "react";
import { getAllAddressesFromUser } from "../api/addressApi";
export default function AddressForm({ data, setData }) {
  useEffect(() => {
    getAllAddressesFromUser().then((res) => {
      console.log(res);
      debugger;
    });
  }, []);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Billing address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="street"
            name="street"
            label="street"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={data.billingStreet}
            onChange={(e) =>
              setData({ ...data, billingStreet: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={data.billingCity}
            onChange={(e) => setData({ ...data, billingCity: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="province"
            name="province"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            value={data.billingProvince}
            onChange={(e) =>
              setData({ ...data, billingProvince: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={data.billingZip}
            onChange={(e) => setData({ ...data, billingZip: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            value={data.billingCountry}
            onChange={(e) =>
              setData({ ...data, billingCountry: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="phone"
            fullWidth
            autoComplete="PhoneRTC"
            variant="standard"
            value={data.billingPhone}
            onChange={(e) => setData({ ...data, billingPhone: e.target.value })}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
