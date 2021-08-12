import '../style/App.css';
import React from 'react';
import NavBar from "../ui/NavBar.js";
import { SpotName } from "../ui/SpotCheck";
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
        this.state = {
            swell: 0,
            period: 0,
            angle: 0
        }
    }

    /*
    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }
    */
    retrieveData (url) {
        let self = this;
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
        // array values between 28-33 are the values i will need, i may or may not need do use other values when winter
        // season starts
        function parseFile (data) {
            const myArr = data.split(' ');
            let swell = parseFloat(myArr[84]) * 3.28084;
            let period = parseFloat(myArr[88]);
            let angle = parseInt(myArr[92]);
            swell = Math.round(swell * 10) / 10
            self.setState({
                swell: swell,
                period: period,
                angle: angle
            })
        }
    }

    componentDidMount() {
    this.retrieveData(url);
    }

    render() {
    return (
        <div>
            <NavBar/>
            <SpotName
                swell={this.state.swell}
                period = {this.state.period}
                angle = {this.state.angle}
            />
        </div>

    )
  }
}

export default App;

