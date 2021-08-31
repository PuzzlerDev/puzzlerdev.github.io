import React from 'react';
import Header from '../components/Header';
import Links from '../components/Links';
import Footer from '../components/Footer';
import data from '../../data.json';
import '../styles/App.scss';

const App = () => {
  const { header, links } = data;

  return (
    <>
      <Header header={header} />
      <Links links={links} />
      <Footer />
    </>
  );
};

export default App;
