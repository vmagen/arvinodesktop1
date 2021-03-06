import React, { useState } from 'react';
import logo from '../assets/BlackLogo.png';
import bcImage from '../assets/logInBackground.jpg';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Link, Grid, Button } from '@material-ui/core';
import EContent from '../Elements/EContent.json'


export default function FCSingIn() {
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
        email: ''
    });

    const handleEmailChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(values.email)) {
            setEmailError("invalid email address");
        }
        else {
            setEmailError("");
        }
    };

    const handleChangePassword = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <div>
            <div className="bg"
                style={{
                    backgroundImage: `url(${bcImage})`,
                    backgroundSize: "cover",
                    height: "100vh",
                }}>
                <div className="SingUpPaper">
                    <Paper elevation={3} >
                        <Grid container>
                            <Grid item lg>
                                <img className="logoLogIn" src={logo} />
                            </Grid>
                            <Grid item lg>
                                <input
                                    className="input"
                                    placeholder={EContent.email}
                                    onChange={handleEmailChange("email")}
                                />
                            </Grid>
                            <Grid item lg>
                                <input
                                type="password"
                                className="input"
                                onChange={handleChangePassword("password")}
                                placeholder={EContent.password}
                                type={values.showPassword ? 'text' : 'password'}
                                />
                                {passwordError}
                            </Grid>
                            <br />
                            <Grid item lg>
                                <Button variant="outlined">{EContent.singIn}</Button>
                            </Grid>
                            <Grid item lg>
                                <Link href="#" variant="body2"> ?שכחת סיסמא </Link>
                            </Grid>
                            <Grid item lg>
                                <Link href="\FCRegistr" variant="body2">  {"אין לך משתמש? לחץ כאן להרשמה"} </Link>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </div>
        </div>
    )
}
