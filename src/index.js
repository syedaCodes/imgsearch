import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style.css';
import Home from './Components/Home';
import Footer from './Components/Footer';

const App = () => {
    return(
        <>
            <Home />
            <Footer />
        </>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));
