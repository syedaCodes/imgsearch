import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style.css';
import Home from './Components/Home';

const App = () => {
    return(
        <>
            <Home />
        </>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));
