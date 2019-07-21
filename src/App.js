import React, { Fragment } from 'react';
import './App.css';
import CustomNav from './components/CustomNav';
import Card from './components/Card';
import Video from './components/Video';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
    <CustomNav />
    <Card />
    <Video />
    <Footer />
    </Fragment>
  );
}

export default App;
