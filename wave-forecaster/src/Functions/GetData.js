import $ from 'jquery'

/*
Grab .txt file from https://www.ndbc.noaa.gov/data/realtime2/51201.txt
 */
export default class GetData {
    static #url = "https://www.ndbc.noaa.gov/data/realtime2/51201.txt";
    static file;
    static line;

    static retrieve = (swell, period) => {
        //retrieve .txt file with buoy data, use ajax instead of .get to send headers
        $.ajax({
            type: 'GET',
            url: this.#url,
            dataType: 'text',
            success: [ function (data) {
                this.file = data;

            }],
            error: function () {
                alert("BUOY IS DOWN");
            },
        });
        console.log(this.file);

        /*let fs = require("fs");
        fs.readFile(this.file, function(text){
            this.line = this.file.split("\n")
        });
        console.log(this.line);*/

        //retrieve .txt file with buoy data, use ajax instead of .get to send headers
// parse txt file to get the most up to date and store into swell and period respectively
// once data has been manipulated. display through props
    }

}


