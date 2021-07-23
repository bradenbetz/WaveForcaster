import '../App.css';
import React from 'react';
import SpotCheck from "../ui/SpotCheck";
import { retrieve } from '../Functions/Functions.js'

let swell = 0;
let period = 0;

class App extends React.Component {

/*
TODO
- Create function to retrieve .txt file - done
- display the calculated wave height working on it
- make it fancy
 */

componentDidMount() {
    retrieve(swell, period);
}

    render() {
    return (
        <div>
            <h1 className='title' >Wave Forecaster</h1>
            <SpotCheck/>
        </div>

    )
  }
}

export default App;

