import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EContent from '../Elements/EContent.json';
import FileUploadPage from './FileUploadPage';

export default function FCAddNewService(props) {

    const [values, setValues] = useState({
        name: '',
        category: '',
        content: '',
        price: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleCloseAddService}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{EContent.AddService}</DialogTitle>
                <DialogContent>
                    <input
                        required
                        type="text"
                        className="input"
                        placeholder={EContent.sName}
                        onChange={handleChange('name')}
                    />
                    <input
                        required
                        type="text"
                        className="input"
                        placeholder={EContent.sCategory}
                        onChange={handleChange('category')}
                    />
                    <input
                        required
                        type="text"
                        className="input"
                        placeholder={EContent.sContent}
                        onChange={handleChange('content')}
                    />
                    <input
                        required
                        type="text"
                        className="number"
                        placeholder={EContent.price}
                        onChange={handleChange('price')}
                    />
                    <FileUploadPage />
                    <Button className="registrButton" variant="outline-secondary" type="submit">{EContent.sAddMore}</Button>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={props.handleCloseAddService}>{EContent.ok}</Button>
                    <br />
                    <Button variant="outlined" onClick={props.handleCloseAddService}>{EContent.exit}</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
