import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {login} from "../api";
import {message} from "antd";
import {createOrder} from "../api/orderApi";
import {useEffect, useState} from "react";
import {getAddressById, getAllAddressesFromUser} from "../api/addressApi";

export default function AddressForm(props) {
    const [data, setData] = useState({
        firstName:'',
        lastName:'',
        street:'',
        city:'',
        province:'',
        zip:'',
        country:'',
        phone:'',
    })
    useEffect(()=>{
        getAddressById(1).then(res=>{
            console.log(res)
            debugger
        }).catch(err=>{
            console.log(err)
        })
    },[])
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        value={data.firstName}
                        onChange={(e) => setData({...data,firstName:e.target.value})}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        value={data.lastName}
                        onChange={(e) => setData({...data,lastName:e.target.value})}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="street"
                        name="street"
                        label="street"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="standard"
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
                        value={data.city}
                        onChange={(e) => setData({...data,city:e.target.value})}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="province"
                        name="province"
                        label="State/Province/Region"
                        fullWidth
                        variant="standard"
                        value={data.province}
                        onChange={(e) => setData({...data,province:e.target.value})}
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
                        value={data.zip}
                        onChange={(e) => setData({...data,zip:e.target.value})}
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
                        value={data.country}
                        onChange={(e) => setData({...data,country:e.target.value})}
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
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" checked={props.isSkip} onChange={e => props.setIsSkip(e.target.checked)}/>}
                        label="Use this address for billing address"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}