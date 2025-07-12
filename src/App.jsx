import React from 'react';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main'
import Page1 from './components/Page1/Page1';
import Footer from './components/Footer/Footer'
import Page2 from './components/Page2/Page2';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div>
      <Nav />
      <Main />
      <Page1 />
      <Page2/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;