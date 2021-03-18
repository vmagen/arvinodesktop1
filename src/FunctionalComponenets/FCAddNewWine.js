import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EContent from '../Elements/EContent.json';
import FileUploadPage from './FileUploadPage';
import { Select } from '@material-ui/core';

export default function FCAddNewWine(props) {
    const [values, setValues] = useState({
        name: '',
        category: '',
        content: '',
        price: '',
        competitionName: ''
    });

    const [category, setCategory] = useState([]);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    useEffect(() => {
        fetch('https://localhost:44370/api/WineCategory',
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
                    setCategory((result.map((c, index) => category[index] = c)))
                    console.log(category)
                },
                (error) => {
                    console.log("err post=", error);
                }, []);
    }, []);

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleCloseAddWine}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{EContent.addWine}</DialogTitle>
                <DialogContent>
                    <input
                        required
                        type="text"
                        className="input"
                        placeholder={EContent.wName}
                        onChange={handleChange('name')}
                    />
                    <input
                        required
                        type="text"
                        className="input"
                        placeholder={EContent.wContent}
                        onChange={handleChange('content')}
                    />
                    <input
                        required
                        type="number"
                        className="input"
                        placeholder={EContent.price}
                        onChange={handleChange('price')}
                    />
                    <br/>
                    <Select
                        required
                        onChange={handleChange}>
                        {category.map((option, index) => (
                            <option value={index}>{option.categoryName}</option>
                        ))}
                    </Select>
                    {EContent.wCategory}
                    <br/>
                    <FileUploadPage />
                    <br/>
                    <FileUploadPage />
                    <Button className="registrButton" variant="outline-secondary" type="submit">{EContent.sAddMore}</Button>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={props.handleCloseAddWine}>{EContent.ok}</Button>
                    <br />
                    <Button variant="outlined" onClick={props.handleCloseAddWine}>{EContent.exit}</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
