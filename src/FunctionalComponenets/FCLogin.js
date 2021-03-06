import React, { useState } from 'react';
import { FormControlLabel, Checkbox, Link, Button, Grid, Input, FormControl, InputLabel, IconButton, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import logo from '../assets/BlackLogo.png';
import bcImage from '../assets/logInBackground.jpg'
import { useHistory } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import { Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";


export default function FCLogin() {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => console.log(values);




    let history = useHistory();
    const [checkEmail, setCheckEmail] = useState('');

    const [values, setValues] = React.useState({
        password: '',
        passwordText: 'סיסמא',
        showPassword: false,
        emailText: 'אימייל',
        email: ''
    });

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

        if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(values.email)) {
            fetch(`http://localhost:54186/api/User/email?email=${values.email}`,
                {
                    method: 'GET',
                    headers: new Headers({
                        'Content-Type': 'application/json; charset=UTF-8',
                        'Accept': 'application/json; charset=UTF-8',
                    })
                })
                .then(res => {
                    console.log('res=', res);
                    console.log('res.status', res.status);
                    console.log('res.ok', res.ok);
                    return res.json()
                })
                .then(
                    (result) => {
                        setCheckEmail({ checkEmail, result })
                        console.log(result)
                    },
                    (error) => {
                        console.log("err post=", error);
                    });
        }

        if (checkEmail !== null) {
            history.push("/Layout");
        }
        else {

        }

    }




    return (
        <div className="bg"
            style={{
                backgroundImage: `url(${bcImage})`,
                backgroundSize: "cover",
                height: "100vh",
            }}>

            <div className="loginPaper">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Paper elevation={3} >
                        <Row>
                            <img className="logoLogIn" src={logo} />
                        </Row>
                        <Row>
                            <input
                                name="email"
                                ref={register({
                                    required: "Required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "invalid email address"
                                    }
                                })}
                            />
                        </Row>
                        <Row>
                            {errors.email && errors.email.message}
                        </Row>
                        <Row>
                        </Row>
                        <Row>
                        </Row>
                    </Paper>

                </form>
            </div>



            <br />
            <FormControl>
                <Input
                    placeholder={values.emailText}
                    onChange={handleChange('email')}
                    inputProps={{ 'aria-label': 'description' }} />
            </FormControl>
            <br />
            <FormControl>
                <Input
                    placeholder={values.passwordText}
                    value={values.password}
                    type={values.showPassword ? 'text' : 'password'}
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
            </FormControl>
            <FormControl>
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="תזכור אותי"
                    className="rememberMe"
                />
            </FormControl>
            <br />
            <Button
                onClick={() => checkValidation()}
                fullWidth
                variant="outlined"
                type='submit'> כניסה </Button>

            <br />
            <Grid container>
                <Grid item lg>
                    <Link href="#" variant="body2"> ?שכחת סיסמא </Link>
                </Grid>
                <Grid item lg>
                    <Link href="\FCRegistr" variant="body2">  {"אין לך משתמש? לחץ כאן להרשמה"} </Link>
                </Grid>
            </Grid>

        </div>
    )
}

