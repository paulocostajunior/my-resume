import React from 'react';
import Hello from './elements/header';
import AboutMe from './elements/aboutMe';

import './App.css';

class App extends React.Component {
    render() {
        return (
            <div>
            <Hello />
            <AboutMe />
            </div>
        );
    }
}
export default App;