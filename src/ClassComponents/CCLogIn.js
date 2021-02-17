import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import { FormControl, InputLabel, OutlinedInput, IconButton, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';


export default class CCLogIn extends Component {


    
    render() {
        return (
            <Container fluid="md">
                <Row>
                    <form className="login">

                        





                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="rememberMe" />
                                <label className="custom-control-label" htmlFor="rememberMe">זכור אותי</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">התחבר</button>
                        <p className="forgot-password">
                            <a href="#">שכחתי סיסמא?</a>
                        </p>
                    </form>
                </Row>
            </Container>
        )
    }
}
