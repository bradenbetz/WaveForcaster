import '../style/App.css';
import React from 'react';
import NavBar from "../ui/NavBar.js";
import SpotCheck from "../ui/SpotCheck";
import {retrieveData} from "../Functions/Functions";

const url = "https://www.ndbc.noaa.gov/data/realtime2/51201.txt";

class App extends React.Component {

/*
TODO
- Create function to retrieve .txt file - done
- display the calculated wave height working on it
- make it fancy
 */

componentDidMount() {
    retrieveData(url);
}

    render() {
    return (
        <div>
            <NavBar/>
            <SpotCheck/>
        </div>

    )
  }
}

export default App;

