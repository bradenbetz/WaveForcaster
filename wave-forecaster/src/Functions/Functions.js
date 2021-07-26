import $ from 'jquery'

/*
Grab .txt file from https://www.ndbc.noaa.gov/data/realtime2/51201.txt - done
 */

export const retrieveData = (url) => {
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

    function parseFile(data) {
        console.log(data);
    }

// parse txt file to get the most up to date and store into swell and period respectively
// once data has been manipulated. display through props
}




