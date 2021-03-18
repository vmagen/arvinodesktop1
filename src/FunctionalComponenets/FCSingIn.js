import React, { useState } from 'react';
import logo from '../assets/BlackLogo.png';
import bcImage from '../assets/logInBackground.jpg';
import Paper from '@material-ui/core/Paper';
import { Link, Grid, Button } from '@material-ui/core';
import EContent from '../Elements/EContent.json'
import { useHistory } from "react-router-dom";
import {
    AwesomeButton,
    AwesomeButtonProgress,
    AwesomeButtonSocial,
} from 'react-awesome-button';
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";
import FCError from './FCError';



export default function FCSingIn() {
    let history = useHistory();
    const [checkEmail, setCheckEmail] = useState('');
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
        email: ''
    });

    const handleEmailChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        values.email.toLowerCase();
    };

    const handleChangePassword = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = () => {
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\*])(?=.{8,})");
   //     if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(values.email) && !strongRegex.test(values.password)) {
     //       setInput(EContent.passAndemailErr);
       //     setOpen(true);
    //    }
 //       else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(values.email)) {
   //         setInput(EContent.emailErr)
   //         setOpen(true);
//        }
//        else if (!strongRegex.test(values.password)) {
  //          setInput(EContent.passworErr)
    //        setOpen(true);
      //  }
   //     else {
            setOpen(false);
            fetch(`https://localhost:44370/api/User/email?email=${values.email}`,
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
                        localStorage.setItem('user', result);
                        console.log(result)
                    },
                    (error) => {
                        console.log("err post=", error);
                  });
       //     if (checkEmail !== null) {
                history.push("/FCHome");
         //   }
      //   else{}
     //   }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <FCError open={open} input={input} handleClose={handleClose} />
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
