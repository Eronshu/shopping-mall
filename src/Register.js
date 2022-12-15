import * as React from 'react';
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
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {register, setRecoveryInfo} from './api'
import sha256 from 'js-sha256';
import {message} from "antd";
import {useNavigate} from "react-router-dom";
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

export default function SignUp() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            username: data.get('username'),
            password: sha256(data.get('password')),
        });
        register({
            username: data.get('username'),
            password: sha256(data.get('password')),
        }).then(res => {
            message.success('register success')
            localStorage.setItem('token', res.data.session);
            navigate(`/login`);
        }).catch(err=>{
            message.error(err.response.data.msg)
        });
        setRecoveryInfo({
            question: data.get('RecoveryQuestion'),
            createAnswer: sha256(data.get('RecoveryAnswer'))
        }).then(res=>{
            console.log(res)
            debugger
        }).catch(err=>{
            console.log(err)
            debugger
        })
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Register
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 5}}>
                        <Grid item xs={12}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="User Name"
                                label="User Name"
                                name="username"
                                // autoComplete="User Name"
                                autoFocus
                            />
                            <br/>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <br/>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="RecoveryQuestion"
                                    label="RecoveryQuestion"
                                    type="RecoveryQuestion"
                                    id="RecoveryQuestion"
                                />
                            </Grid>
                            <br/>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="RecoveryAnswer"
                                    label="RecoveryAnswer"
                                    type="RecoveryAnswer"
                                    id="RecoveryAnswer"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{mt: 5}}/>
            </Container>
        </ThemeProvider>
    );
}