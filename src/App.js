import React, { Component } from 'react';

class App extends Component {

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(people => console.log(people))
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default App;
