import $ from 'jquery'

/*
Grab .txt file from const url = "https://www.ndbc.noaa.gov/data/realtime2/51201.txt"; - done
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
        const myArr = data.split('  ');
        console.log(myArr[30], myArr[31], myArr[32]);

    }

// parse txt file to get the most up to date and store into swell and period respectively
// once data has been manipulated. display through props
}




