import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Layout from './Layout';
import messages from './messages';
import './styles/App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CCLogIn from './ClassComponents/CCLogIn';
import 'bootstrap/dist/css/bootstrap.min.css';
import FCLogin from './FunctionalComponenets/FCLogin';


function App() {
  const [locale, setLocale] = useState('he');

  return (
    
    <BrowserRouter>
      <Switch>
        <Route path="/" component={FCLogin} exact />
        <Route path="/Layout" component={Layout}>
          <IntlProvider locale={locale} messages={messages[locale]}>
            <Layout setLocale={setLocale} />
          </IntlProvider>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
