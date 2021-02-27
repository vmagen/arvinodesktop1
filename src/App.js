import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Layout from './Layout';
import messages from './messages';
import './styles/App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FCLogin from './FunctionalComponenets/FCLogin';
import FCRegistr from './FunctionalComponenets/FCRegistr';
import FCRegistrWinery from './FunctionalComponenets/FCRegistrWinery';



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
        <Route path="/FCRegistr" component={FCRegistr} />
        <Route path="/FCRegistrWinery" component={FCRegistrWinery} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;