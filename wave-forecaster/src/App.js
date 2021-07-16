import './App.css';
import React from 'react';
//import { Container } from 'react';
//import SpotCheck from "./SpotCheck";
import GetData from './Functions/GetData.js'

let swell = 0;
let period = 0;

class App extends React.Component {

/*
TODO
- Create function to retrieve .txt file
- display the calculated wave height
- make it fancy
 */

componentDidMount() {
    GetData.retrieve(swell, period);
}

    render() {
    return (
        <div>
            <p>test</p>
        </div>
    )
  }
}

export default App;

