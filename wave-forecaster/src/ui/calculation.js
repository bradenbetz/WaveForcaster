import React from "react";
import PropTypes from 'prop-types'

class Calculation extends React.Component {
    swell = this.props.swell;
    period = this.props.period;
    angle = this.props.angle;

    calculateWaveHeight = (waveHeight) => {
        return {
            if (swell) {

            }
        }
    }

    render() {
        return (
            <div>
                <h2 align='center' >
                    {this.swell} ft,
                    {this.period} seconds,
                    {this.angle} degrees,
                </h2>
            </div>
        )
    }
}

export default Calculation;
