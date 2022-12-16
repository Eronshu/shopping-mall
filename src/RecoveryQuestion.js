import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import * as React from "react";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {setRecoveryInfo} from "./api";
import sha256 from "js-sha256";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {message} from "antd";


const theme = createTheme();

export default function RecoveryQuestion() {
    const navigate = useNavigate();
    const [question, setQuestion] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        debugger
        setRecoveryInfo(question, sha256(data.get('RecoveryAnswer'))).then(res => {
            message.success("set recovery question success")
            navigate('/')
        }).catch(err => {
            message.error(err.response.msg)
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
                       Set Recovery Question
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 5}}>
                    <Grid item xs={12}>
                        <label htmlFor="RecoveryQuestion">Recovery Question:</label>
                        <select id="RecoveryQuestion" value={question}
                                onChange={e => setQuestion(e.target.value)}>
                            <option value="What is your mother's maiden name?">What is your mother's maiden name?
                            </option>
                            <option value="What was the name of your first pet?">What was the name of your first pet?
                            </option>
                            <option value="What was the name of your first school?">What was the name of your first
                                school?
                            </option>
                        </select>

                    <br/>
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
                </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Sign Up
                    </Button>
                </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}