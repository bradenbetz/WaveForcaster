import React from "react";
//import PropTypes from 'prop-types'

// noinspection SpellCheckingInspection
class Calculation extends React.Component {
    /* TODO
        Calculates spot heights
        make a dropdown to choose a spot, once clicked it will give the appropriate wave height for the chosen spot
     */

    swell = this.props.swell;
    period = this.props.period;
    angle = this.props.angle;
    calculation = 0;
    waveHeight = 0;

    calculateWaveHeight = (calculation) => {
        if (this.swell < 6 && this.swell > 4.5 && this.period < 12.5 && this.period > 10.5) {
            calculation = 10;
        } else {
            calculation = 1;
        }
        return {
            calculation
        };
    }

    componentDidMount() {
        this.waveHeight = this.calculateWaveHeight(this.calculation);
    }

    render() {
        return (
            <div>
                <h2 align='center' >
                    {this.waveHeight} ft
                </h2>
            </div>
        )
    }
}

export default Calculation;
