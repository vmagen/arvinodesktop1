import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Layout from './Layout';
import messages from './messages';
import './styles/App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  const [locale, setLocale] = useState('he');

  return (
    <BrowserRouter>
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Layout setLocale={setLocale} />
    </IntlProvider>
    </BrowserRouter>
  );
}

export default App;
