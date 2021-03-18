import React, { useState } from 'react';
import './styles/App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FCRegistr from './FunctionalComponenets/FCRegistr';
import FCRegistrWinery from './FunctionalComponenets/FCRegistrWinery';
import FCSingIn from './FunctionalComponenets/FCSingIn';
import FCProductManagment from './FunctionalComponenets/FCProductManagment';
import FCHome from './FunctionalComponenets/FCHome';
import FileUploadPage from './FunctionalComponenets/FileUploadPage';
import 'react-awesome-button/dist/themes/theme-blue.css';

function App() {

  return (
    
    <BrowserRouter>
      <Switch>
        <Route path="/" component={FCSingIn} exact />
        <Route path="/FCHome" component={FCHome}/>
        <Route path="/FCProductManagment" component={FCProductManagment} />
        <Route path="/FCRegistr" component={FCRegistr} />
        <Route path="/FCRegistrWinery" component={FCRegistrWinery} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;