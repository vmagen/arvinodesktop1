import React from 'react';
import { FormControlLabel, Checkbox, Link, Button, Grid, Input, FormControl, InputLabel, IconButton, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Email from 'react-email-autocomplete';
import logo from '../assets/BlackLogo.png';
import bcImage from '../assets/logInBackground.jpg'
import { Form } from 'react-bootstrap';

export default function FCLogin() {

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        passwordText: 'סיסמא',
        weight: '',
        weightRange: '',
        showPassword: false,
        emailText: 'אימייל',
        email: ''
    });

    const customDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'walla.co.il']

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const checkValidation = () => {

    }

    return (
        <div className="bg"
            style={{
                backgroundImage: `url(${bcImage})`,
                backgroundSize: "cover",
                height: "100vh",
            }}>
            <Form onSubmit={checkValidation}>

                <div className="login">

                    <div style={{ marginRight: 50 }}>
                        <img className="logoLogIn" src={logo} >
                        </img>
                    </div>

                    <br />

                    <FormControl>
                        <Email
                            id="email"
                            className="form-control"
                            placeholder={values.emailText}
                            domains={customDomains}
                            value={values.email}
                        />
                        <br />
                        <Input
                            placeholder={values.passwordText}
                            id="password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="תזכור אותי"
                            className="rememberMe"
                        />
                        <br />
                        <Button
                            type="submit"
                            fullWidth
                            variant="outlined">
                            כניסה
                </Button>

                        <br />
                        <Grid container>
                            <Grid item lg>
                                <Link href="#" variant="body2"> ?שכחת סיסמא </Link>
                            </Grid>
                            <Grid item lg>
                                <Link href="#" variant="body2">  {"אין לך משתמש? לחץ כאן להרשמה"} </Link>
                            </Grid>
                        </Grid>
                    </FormControl>
                </div>
            </Form>
        </div>
    )
}
