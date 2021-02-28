import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { IntlProvider } from 'react-intl';
import messages from '../messages';
import { TextField, Table, TableRow, TableCell, Paper, LinearProgress, makeStyles, withStyles } from '@material-ui/core';
import ETimeline from '../Elements/ETimeline';
import bcImage from '../assets/logInBackground.jpg'



export default function FCRegistrWinery() {
    let history = useHistory();
    const [locale, setLocale] = useState('he');
    const [isBold2, setBold2] = useState('700');

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
        setBold2('0');
        history.push("/FCLogin");
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const getArea = () => {
        fetch(`http://localhost:54186/api/User/`,
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
}

return (
    <div className="registrDiv"
        style={{
            backgroundImage: `url(${bcImage})`,
            backgroundSize: "cover",
            height: "100vh"
        }}>
        <IntlProvider locale={locale} messages={messages[locale]}>
            <Paper elevation={3} className="registrPaper">
                <Table>
                    <TableRow>
                        <TableCell>
                            <ETimeline isBold2={isBold2} />
                        </TableCell>
                        <TableCell>
                            <Form className="registrForm" onSubmit={handleSubmit}>
                                <TextField
                                    required
                                    id="standard-required"
                                    label="שם היקב"
                                    type="text"
                                    onChange={handleChange('firstName')}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />

                                <TextField
                                    required
                                    id="standard-required"
                                    label="כתובת של היקב"
                                    type="text"
                                    onChange={handleChange('lastName')}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    required
                                    id="standard-number"
                                    label="טלפון ביקב"
                                    type="number"
                                    onChange={handleChange('phone')}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    required
                                    id="standard-required"
                                    label="אימייל ביקב"
                                    type="text"
                                    onChange={handleChange('email')}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    required
                                    id="standard-required"
                                    label="תיאור קצר על היקב"
                                    type="text"
                                    onChange={handleChange('email')}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <hr />
                                <Button className="registrButton" variant="outline-secondary" type="submit"> הבא </Button>
                            </Form>
                        </TableCell>
                    </TableRow>
                </Table>
            </Paper>
        </IntlProvider>
    </div>
)
}
