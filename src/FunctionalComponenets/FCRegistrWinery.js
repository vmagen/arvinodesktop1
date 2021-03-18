import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { Table, TableRow, TableCell, Paper } from '@material-ui/core';
import ETimeline from '../Elements/ETimeline';
import bcImage from '../assets/logInBackground.jpg';
import { Select } from '@material-ui/core';
import EContent from '../Elements/EContent.json'
import FileUploadPage from './FileUploadPage';


export default function FCRegistrWinery() {
    let history = useHistory();
    const [isBold2, setBold2] = useState('700');
    const [area, setArea] = useState([]);


    const [values, setValues] = useState({
        wineryName: '',
        wineryAdress: '',
        phone: '',
        email: '',
        wineryDescription: "",
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


    const btnUpload = () => {
        const imgName = 'imgFromGallery.jpg';
    };


    useEffect(() => {
        fetch('https://localhost:44370/api/AreaCategory',
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
            <form>
                <div className="SingUpPaper">
                    <Paper elevation={3} >
                        <Table>
                            <TableRow>
                                <TableCell>
                                    <ETimeline isBold2={isBold2} />
                                </TableCell>
                                <TableCell>
                                    <Form className="registrForm" onSubmit={handleSubmit}>
                                        <input
                                            required
                                            type="text"
                                            className="input"
                                            placeholder={EContent.wineryName}
                                            onChange={handleChange('wineryName')}
                                        />
                                        <input
                                            required
                                            type="text"
                                            className="input"
                                            placeholder={EContent.wineryAdress}
                                            onChange={handleChange('wineryAdress')}
                                        />
                                        {EContent.chooseArea}
                                        <Select
                                            required
                                            onChange={handleChange}>
                                            {area.map((option, index) => (
                                                <option value={index}>{option.areaName}</option>
                                            ))}
                                        </Select>
                                        <input
                                            required
                                            className="input"
                                            type="number"
                                            placeholder={EContent.wineryPhone}
                                            onChange={handleChange('phone')}
                                        />
                                        <input
                                            required
                                            validator="isEmail"
                                            className="input"
                                            placeholder={EContent.wineryEmail}
                                            onChange={handleChange('email')}
                                        />
                                        <input
                                            required
                                            validator="isEmail"
                                            className="input"
                                            placeholder={EContent.wineryDescription}
                                            onChange={handleChange('wineryDescription')}
                                        />
                                    </Form>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <FileUploadPage />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Button className="registrButton" variant="outline-secondary" type="submit"> {EContent.next} </Button>
                                </TableCell>
                            </TableRow>
                        </Table>
                    </Paper>
                </div>
            </form>
        </div>
    )
}
