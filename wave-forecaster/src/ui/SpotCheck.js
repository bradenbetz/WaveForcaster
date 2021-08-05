import React from "react";
import Calculation from "./calculation";
import { Container } from "semantic-ui-react";
//import { useState } from "react";

/*
TODO
    keep spot title static for now
    pass the props from app.js to calculation
    plan is to use spot check as a surf spot names, where the state is updated to the spot name
    that state is then passed down to calculation to give the appropriate calculation based on the spot
    GET DROPDOWN FROM Bootstrap
 */

export const SpotName = (props) => {

    //const [spot, setSpot] = useState([]);
        return (
                <Container align={'center'}>
                    <h2 align='center' >SPOT CHECK</h2>
                    <Calculation
                        swell={props.swell}
                        period = {props.period}
                        angle = {props.angle}
                    />
                </Container>
        )
}


