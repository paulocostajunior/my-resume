import React from 'react';
import Hello from './elements/header/header';
import AboutMe from './elements/aboutMe/aboutMe';
import Information from './elements/information/information';

import './App.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <AboutMe />
                <Information />
            </div>
        );
    }
}
export default App;