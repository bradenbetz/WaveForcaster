import React from "react";
//import PropTypes from 'prop-types'

class Calculation extends React.Component {
    /* TODO
        Calculates spot heights
        make a dropdown to choose a spot, once clicked it will give the appropriate wave height for the chosen spot
     */

    swell = parseInt(this.props.swell);
    period = parseInt(this.props.period);
    angle = parseInt(this.props.angle);
    calculation = null;
    waveHeight = 0;

    calculateWaveHeight = () => {
        let data = [""];
        if (this.swell < 6 && this.swell > 4.5 && this.period < 12.5 && this.period > 10.5) {
            data = "10ft";
        } else if (this.swell > 1.5 && this.swell < 3.7 && this.period < 16 && this.period > 12) {
            data = "3 - 5ft";
        } else {
            data = "flat";
        }
        return {
            data
        };
    }

    componentDidMount() {
        this.waveHeight = this.calculateWaveHeight(this.calculation);
        console.log(this.waveHeight);
    }

    render() {
        return (
            <div>
                <h2 align='center' >
                    {this.props.swell} ft " "
                    {this.props.period} sec" "
                    {this.props.angle} degrees" "
                </h2>
            </div>
        )
    }
}

export default Calculation;
