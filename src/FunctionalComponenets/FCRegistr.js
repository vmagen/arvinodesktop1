import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { Table, TableRow, TableCell, Paper, makeStyles } from '@material-ui/core';
import ETimeline from '../Elements/ETimeline';
import bcImage from '../assets/logInBackground.jpg'
import EContent from '../Elements/EContent.json'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Alert } from 'bootstrap';



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));



export default function FCRegistr() {
    let history = useHistory();
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState("");
    const [alertTitle, setAlertTitle] = useState("");
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
        if (values.password !== values.confirmPassword) {
            setAlert("אימות סיסמא אינו זהה לסיסמא")
        }
        else {
            setBold1('0');

            let newUser = {
                "email": values.email,
                "code": values.password,
                "typeId": "2"
            }
            fetch('http://localhost:54186/api/User',
                {
                    method: 'POST',
                    body: JSON.stringify(newUser),
                    headers: new Headers({
                        'Content-Type': 'application/json; charset=UTF-8',
                        'Accept': 'application/json; charset=UTF-8',
                    })
                })
                .then(response => response.json())
                .then(data => {
                  console.log('Success:', data);
                })
                .catch((error) => {
                  console.error('Error:', error);
                });



            let newWineryManager =
            {
                "firstName": values.firstName,
                "lastName": values.lastName,
                "phone": values.phone,
                "email": values.email.toLowerCase()
            }
            fetch('http://localhost:54186/api/WineryManager',
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
                    if (res.status === 400) {
                        setAlert(res);
                        // handleClickOpen();
                    }
                    return res.json()
                })
                .then(
                    (result) => {
                        console.log("fetch btnFetchGetStudents= ", result);
                    },
                    (error) => {
                        console.log("err post=", error);
                    });


            //if (alert === "") {
            //  history.push("/FCRegistrWinery");
            //}
        }
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="bg"
            style={{
                backgroundImage: `url(${bcImage})`,
                backgroundSize: "cover",
                height: "100vh"
            }}>
            <div className="SingUpPaper">


                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title"> {EContent.error}</DialogTitle>
                    <DialogContent>
                        <DialogContentText> {alert}</DialogContentText>
                        <input
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary"> {EContent.exit} </Button>
                    </DialogActions>
                </Dialog>



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
                                        onChange={handleChange("confirmPassword")}
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
        </div>
    )
}
