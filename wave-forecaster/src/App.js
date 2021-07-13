import './App.css';
import React from "react";
import GetData from "./Functions/GetData.js"

class App extends React.Component {


  render() {
    return (
        <div>
            {this.data}
            <p>test</p>
        </div>
    )
  }


}

export default App;
