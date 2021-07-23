import $ from 'jquery'

/*
Grab .txt file from https://www.ndbc.noaa.gov/data/realtime2/51201.txt - done
 */

const url = "https://www.ndbc.noaa.gov/data/realtime2/51201.txt";
let file;
//let line;

export const retrieve = (swell, period) => {
    //retrieve .txt file with buoy data, use ajax instead of .get to send headers
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'text',
        success: [ function (data) {
            file = data;

        }],
        error: function () {
            alert("BUOY IS DOWN");
        },
    });
    console.log(file);

    /*let fs = require("fs");
    fs.readFile(this.file, function(text){
        this.line = this.file.split("\n")
    });
    console.log(this.line);*/

    //retrieve .txt file with buoy data, use ajax instead of .get to send headers
// parse txt file to get the most up to date and store into swell and period respectively
// once data has been manipulated. display through props
}



