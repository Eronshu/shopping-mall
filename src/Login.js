import axios from 'axios'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {login} from './api'
import * as React from "react";
import sha256 from 'js-sha256';
import { message } from 'antd';
import { useNavigate, useLocation } from "react-router-dom";
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function ResetPassword(props) {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        login({
            username: data.get('email'),
            password: sha256(data.get('password')),
            // password: data.get('password'),
        }).then(res => {
            console.log(res)
            message.success('login success')
            localStorage.setItem('token', res.data.data.session);
            localStorage.setItem('user', res.data.data.username);
            localStorage.setItem('is_admin', res.data.data.is_admin);
            debugger
            props.setIslogin(localStorage.getItem('token'))
            props.setIsAdmin(res.data.data.is_admin)
            navigate(`/`);
        }).catch(err => {
            message.error(err.response.data.msg)
        })
    };
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Log in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="User Name"
                            label="User Name"
                            name="email"
                            // autoComplete="User Name"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Log in
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="/resetPassword" variant="body2">
                                    Forgot password?
                                </Link>
                                {/*<Link href="/RecoveryQuestion" variant="body2">*/}
                                {/*    Set your Recovery Question*/}
                                {/*</Link>*/}
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}