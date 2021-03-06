import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { IntlProvider } from 'react-intl';
import messages from '../messages';
import { TextField, Table, TableRow, TableCell, Paper } from '@material-ui/core';
import ETimeline from '../Elements/ETimeline';
import bcImage from '../assets/logInBackground.jpg';
import { InputLabel, FormControl, Select } from '@material-ui/core';
import EContent from '../Elements/EContent.json'


export default function FCRegistrWinery() {
    let history = useHistory();
    const [locale, setLocale] = useState('he');
    const [isBold2, setBold2] = useState('700');
    const [area, setArea] = useState([]);
    const [img, setImg] = useState("");
    const [imgName, setImgName] = useState("");

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        lineProgressValue: 50,
        areaChoose: ""
    });


    const handleSubmit = () => {
        setBold2('0');
        history.push("/FCLogin");
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const fileSelectHandler = event => {
        setImg(event.target.files[0]);
        setImgName('profilePic.jpg');
        console.log(img.name)
    }

    const fileUploadHandler = () => {
        let urlAPI = "http://localhost:54186/uploadpicture";
        let dataI = new FormData();
        dataI.append('picture', {
            uri: img.name,
            name: imgName,
            type: 'image/jpg'

        });
        const config = {
            method: 'POST',
            body: dataI,
        };

        fetch(urlAPI, config)
            .then((res) => {
                console.log('res.status=', res.status);
                if (res.status == 201) {
                    return res.json();
                }
                else {
                    console.log('error uploding ...');
                    return "err";
                }
            })
            .then((responseData) => {
                console.log(responseData);
                if (responseData != "err") {
                    let picNameWOExt = imgName.substring(0, imgName.indexOf("."));
                    let imageNameWithGUID = responseData.substring(responseData.indexOf(picNameWOExt), responseData.indexOf(".jpg") + 4);
                }
                else {
                    console.log('error uploding ...');
                    alert('error uploding ...');
                }
            })
            .catch(err => {
                alert('err upload= ' + err);
            });
    }

    useEffect(() => {
        fetch('http://localhost:54186/api/AreaCategory',
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
                    setArea((result.map((a, index) => area[index] = a)))
                    console.log(values.area)
                },
                (error) => {
                    console.log("err post=", error);
                }, []);
    }, []);

    return (
        <div className="bg"
            style={{
                backgroundImage: `url(${bcImage})`,
                backgroundSize: "cover",
                height: "100vh"
            }}>
            <IntlProvider locale={locale} messages={messages[locale]}>
                <form onSubmit={fileUploadHandler}>

                    <div className="SingUpPaper">
                        <Paper elevation={3} >
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
                                            <FormControl required>
                                                <InputLabel htmlFor="standard-required">איזור</InputLabel>
                                                <Select
                                                    onChange={handleChange}>
                                                    {area.map((option, index) => (
                                                        <option value={index}>{option.areaName}</option>
                                                    ))}
                                                </Select>
                                            </FormControl>
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
                                        </Form>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <input
                                            label="העלה לוגו ליקב"
                                            type="file"
                                            onChange={fileSelectHandler}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Button className="registrButton" variant="outline-secondary" type="submit"> הבא </Button>
                                    </TableCell>
                                </TableRow>
                            </Table>
                        </Paper>
                    </div>
                </form>

            </IntlProvider>
        </div>
    )
}
