import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EContent from '../Elements/EContent.json';

export default function FCError(props) {
    return (
        <div className="errDiv">
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{EContent.error}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">{props.input}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={props.handleClose}>{EContent.exit}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}