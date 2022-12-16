import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import * as React from "react";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {changePassword, getRecoveryQuestion, recoverPassword, setRecoveryInfo} from "./api";
import sha256 from "js-sha256";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {message} from "antd";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


const theme = createTheme();
export default function ResetPassword(props) {
    const [recoveryQuestion, setRecoveryQuestion] = useState('');
    const [username, setUsername] = useState('');
    const [answer, setAnswer] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [showAnswerFields, setShowAnswerFields] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleAnswerChange = (event) => {
        setAnswer(event.target.value);
    };

    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
    };
    const navigate = useNavigate();

    const handleGetRecoveryQuestion = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        getRecoveryQuestion(username).then(res => {
            setRecoveryQuestion(res.data.data.question);
            setShowAnswerFields(true);
        }).catch(error => {
            console.error(error);
            debugger
            message.error(error)
        })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        recoverPassword(username, sha256(answer), sha256(newPassword)).then(res => {
            console.log(res)
            message.success('Password successfully reset!');
            navigate('/login')
        }).catch(error => {
            message.error('Error resetting password');
        })
    };

    const handleLoginChangePassword= async (event) => {
        event.preventDefault();
        changePassword(sha256(newPassword)).then(res => {
            console.log(res)
            debugger
            message.success('Password successfully reset!');
            navigate('/login')
        }).catch(error => {
            message.error('Error resetting password');
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
                        Reset Password
                    </Typography>
                    {!props.isLogin && <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 5}}>
                        {!showAnswerFields && <Grid item xs={12}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="Username"
                                label="username"
                                name="username"
                                autoFocus
                                value={username}
                                onChange={handleUsernameChange}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                                onClick={handleGetRecoveryQuestion}
                            >
                                get my recovery question
                            </Button>
                        </Grid>}
                        {showAnswerFields && (
                            <>
                                <p>Your Recovery question: <br/><br/>{recoveryQuestion}</p>
                                <Grid item xs={12}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="answer"
                                        label="question answer"
                                        id="answer"
                                        value={answer}
                                        onChange={handleAnswerChange}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="new_password"
                                        label="your new password"
                                        id="new_password"
                                        type="password"
                                        value={newPassword}
                                        onChange={handleNewPasswordChange}
                                    />
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{mt: 3, mb: 2}}
                                    onClick={handleSubmit}
                                >
                                    Reset Password
                                </Button>
                            </>)}
                    </Box>}
                    {props.isLogin && <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 5}}>
                                <Grid item xs={12}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="new_password"
                                        label="your new password"
                                        id="new_password"
                                        type="password"
                                        value={newPassword}
                                        onChange={handleNewPasswordChange}
                                    />
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{mt: 3, mb: 2}}
                                    onClick={handleLoginChangePassword}
                                >
                                    Reset Password
                                </Button>
                    </Box>}
                </Box>
            </Container>
        </ThemeProvider>
    );
}