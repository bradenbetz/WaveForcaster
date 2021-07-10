import './App.css';
import React from "react";
import rp from "request-promise";
import * as cheerio from "react-dom/test-utils";

const url = "https://cors-anywhere.herokuapp.com/https://www.ndbc.noaa.gov/station_page.php?station=51201"

class App extends React.Component {
  state = {};

    componentDidMount() {
        rp(url)
            .then(html => {
                let $ = cheerio.load(html);
                let data = [];

                $("#data table span").each(
                    function(i, element) {
                    let stuffs = $(this)
                        .prepend()
                        .text()
                    stuffs.push(data);
                });
            })
            .catch(function(err) {
                console.log("crawl failed");
            });
    }

  render() {
    return (
        <div>
            {this.state.data}
            <p>test</p>
        </div>
    )
  }


}

export default App;
