import React, { useState } from 'react';
import logo from '../assets/BlackLogo.png';
import bcImage from '../assets/logInBackground.jpg';
import Paper from '@material-ui/core/Paper';
import { Link, Grid, Button } from '@material-ui/core';
import EContent from '../Elements/EContent.json'
import { useHistory } from "react-router-dom";


export default function FCSingIn() {
    let history = useHistory();
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [checkEmail, setCheckEmail] = useState('');

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

    const handleSubmit = () => {
        
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

        if (checkEmail !== null) {
            history.push("/Layout");
        }
    }
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
                                <Button variant="outlined" onClick={handleSubmit}>{EContent.singIn}</Button>
                            </Grid>
                            <Grid item lg>
                                <Link href="#" variant="body2"> {EContent.forgetPassword} </Link>
                            </Grid>
                            <Grid item lg>
                                <Link href="\FCRegistr" variant="body2">  {EContent.notAUser} </Link>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </div>
        </div>
    )
}
