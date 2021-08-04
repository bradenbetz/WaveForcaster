import '../style/App.css';
import React from 'react';
import NavBar from "../ui/NavBar.js";
import SpotCheck from "../ui/SpotCheck";
import $ from "jquery";

/*TODO
- Create function to retrieve .txt file - done
- display the calculated wave height working on it/ finished grabbing necessary swell height, period and direction
- make it fancy
-Then create a favorites feature that allows users to save spots based on preference and group them together through account

 */

const url = "http://localhost:8080/https://www.ndbc.noaa.gov/data/realtime2/51201.txt";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
        this.state = {appData: {}};
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    retrieveData (url) {
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'text',
            success: [ function (data) {
                parseFile(data);
            }],
            error: function () {
                alert("BUOY IS DOWN");
            },
        });
        function parseFile (data) {
            const myArr = data.split('  ');
            let swell = parseFloat(myArr[28]) * 3.28084;
            let period = parseFloat(myArr[31]);
            let angle = parseInt(myArr[32]);
            swell = Math.round(swell * 10) / 10
            console.log(swell, period, angle);
        }
    }

    componentDidMount() {
    this.retrieveData(url);
    //this.callAPI();
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

