import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { IntlProvider } from 'react-intl';
import messages from '../messages';
import { TextField, Table, TableRow, TableCell, Paper, LinearProgress, makeStyles, withStyles } from '@material-ui/core';
import ETimeline from '../Elements/ETimeline';
import bcImage from '../assets/logInBackground.jpg'


export default function FCRegistr() {
    let history = useHistory();
    const [locale, setLocale] = useState('he');
    const [isBold1, setBold1] = useState('700');

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
        history.push("/FCRegistrWinery");
        let newWineryManager =
        {
            "firstName": values.firstName,
            "lastName": values.lastName,
            "phone": values.phone,
            "email": values.email,
            "code": values.password,
            "typeId": "2"
        }
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };



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
                                <ETimeline isBold1={isBold1}/>
                            </TableCell>
                            <TableCell>
                                <Form className="registrForm" onSubmit={handleSubmit}>
                                    <TextField
                                        required
                                        id="standard-required"
                                        label="שם פרטי"
                                        type="text"
                                        onChange={handleChange('firstName')}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <TextField
                                        required
                                        id="standard-required"
                                        label="שם משפחה"
                                        type="text"
                                        onChange={handleChange('lastName')}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <TextField
                                        required
                                        id="standard-number"
                                        label="נייד"
                                        type="number"
                                        onChange={handleChange('phone')}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <TextField
                                        required
                                        id="standard-required"
                                        label="אימייל"
                                        type="text"
                                        onChange={handleChange('email')}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <TextField
                                        required
                                        id="standard-required"
                                        label="סיסמא"
                                        type="text"
                                        onChange={handleChange('password')}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <TextField
                                        required
                                        id="standard-required"
                                        label="אימות סיסמא"
                                        type="text"
                                        onChange={handleChange('confirmPassword')}
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
