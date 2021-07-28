import '../style/App.css';
import React from 'react';
import NavBar from "../ui/NavBar.js";
import SpotCheck from "../ui/SpotCheck";
import {retrieveData} from "../Functions/Functions";

const url = "https://www.ndbc.noaa.gov/data/realtime2/51201.txt";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }
/*TODO
- Create function to retrieve .txt file - done
- display the calculated wave height working on it
- make it fancy
 */

componentDidMount() {
    retrieveData(url);
    this.callAPI();
}

    render() {
    return (
        <div>
            <NavBar/>
            <SpotCheck/>
            <p className="App-intro">{this.state.apiResponse}</p>
        </div>

    )
  }
}

export default App;

