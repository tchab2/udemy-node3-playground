const https = require('https');

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Boston.json?access_token=pk.eyJ1IjoiY2dpc2NoYWJvdGJlYXVsaWV1IiwiYSI6ImNrMG1qY21pdjE3cDEzb3FvajJ6b2dpaWIifQ.ZvgGBuq1lAFb2UAh497iFQ&limit=1';

const request = https.request(url, (response) => {
    let = data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
    })

    response.on('end', () => {
        const body = JSON.parse(data);

        console.log(body);
    })
})

request.on('error', (error) => {
    console.log(error)
})

request.end();