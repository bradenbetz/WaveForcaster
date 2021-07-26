import React from "react";
import Calculation from "./calculation";
import { Container} from "semantic-ui-react";

export default class SpotCheck extends React.Component {
    render() {
        return (
                <Container align={'center'}>
                    <h2 align='center' >SPOTCHECK HERE</h2>
                    <Calculation/>
                </Container>
        )
    }
}
