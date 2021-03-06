import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { IntlProvider } from 'react-intl';
import messages from '../messages';
import { TextField, Table, TableRow, TableCell, Paper, makeStyles, withStyles } from '@material-ui/core';
import ETimeline from '../Elements/ETimeline';
import bcImage from '../assets/logInBackground.jpg'
import MuiAlert from '@material-ui/lab/Alert';
import { Grid } from '@material-ui/core';
import EHelper from '../Elements/EHelper'
import EContent from '../Elements/EContent.json'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function FCRegistr() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    let history = useHistory();
    const [locale, setLocale] = useState('he');
    const [isBold1, setBold1] = useState('700');
    const [erroreMessage, setErroreMessage] = useState("");
    const [messageType, setEMessageType] = useState("")

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        lineProgressValue: 50
    });


    const handleSubmit = () => {
        setBold1('0');

        //history.push("/FCRegistrWinery");
        let newWineryManager =
        {
            "firstName": values.firstName,
            "lastName": values.lastName,
            "phone": values.phone,
            "email": values.email
        }

        fetch('http://localhost:54186/api/WineryManager/',
            {
                method: 'POST',
                body: JSON.stringify(newWineryManager),
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
                    console.log("fetch btnFetchGetStudents= ", result);
                },
                (error) => {
                    console.log("err post=", error);
                });


        let newUser = {
            "email": values.email,
            "code": values.password,
            "typeId": "2"
        }

    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });

        switch (prop) {
            case 'email':
                if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(values.email)) {
                }
                else {
                }
                break;

            default:
                break;
        }
    };



    return (
        <div className="bg"
            style={{
                backgroundImage: `url(${bcImage})`,
                backgroundSize: "cover",
                height: "100vh"
            }}>
            <IntlProvider locale={locale} messages={messages[locale]}>

                <div className="SingUpPaper">
                    <Paper elevation={3} >
                        <Table>
                            <TableRow>
                                <TableCell>
                                    <ETimeline isBold1={isBold1} />
                                </TableCell>
                                <TableCell>
                                    <Form className="registrForm" onSubmit={handleSubmit}>
                                         <input
                                            required
                                            type="text"
                                            className="input"
                                            placeholder={EContent.firstName}
                                            onChange={handleChange('firstName')}
                                        />
                                         <input
                                            required
                                            type="text"
                                            className="input"
                                            placeholder={EContent.lastName}
                                            onChange={handleChange('lastName')}
                                        />
                                        <input
                                            required
                                            className="input"
                                            type="number"
                                            placeholder={EContent.phone}
                                            onChange={handleChange('phone')}
                                        />
                                        <input
                                            required
                                            validator="isEmail"
                                            className="input"
                                            placeholder={EContent.email}
                                            onChange={handleChange('email')}
                                        />
                                        <input
                                            type="password"
                                            type="text"
                                            className="input"
                                            onChange={handleChange("password")}
                                            placeholder={EContent.password}
                                            type={values.showPassword ? 'text' : 'password'}
                                        />
                                        <input
                                            type="password"
                                            type="text"
                                            className="input"
                                            onChange={handleChange("password")}
                                            placeholder={EContent.confirmPassword}
                                            type={values.showPassword ? 'text' : 'password'}
                                        />
                                        <hr />
                                        <Button className="registrButton" variant="outline-secondary" type="submit">{EContent.next}</Button>
                                    </Form>
                                </TableCell>
                            </TableRow>
                        </Table>
                    </Paper>
                </div>

            </IntlProvider>
        </div>
    )
}
