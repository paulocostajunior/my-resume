import React from 'react';
import Header from './elements/header/header';
import Home from './elements/home/home';
import AboutMe from './elements/aboutMe/aboutMe';
import Information from './elements/information/information';

import './App.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Home />
                <AboutMe />
                <Information />
            </div>
        );
    }
}
export default App;