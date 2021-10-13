const fetchResponseByURL = require('./api');
const express = require('express');
const cors = require('cors');
const http = require('http');

require('dotenv').config()

// Initialize the app
const app = express();

app.use(cors());

// The server API endpoint
app.get('/api/search/:artist', async (req, res) => {
    const response = await fetchResponseByURL(`search/artist/?q=${req.params.artist}&index=0&limit=12`);

    if (response.data) {
        res.status(200).json(response.data)
    } else {
        res.sendStatus(400);
    }
});

app.get('/api/artist/:artist_id', async (req, res) => {
    const response = await fetchResponseByURL(`artist/${req.params.artist_id}`);
    if (response.data) {
        res.status(200).json(response.data)
    } else {
        res.sendStatus(400);
    }
});

app.get('/api/tracks/:artist_id', async (req, res) => {
    const response = await fetchResponseByURL(`artist/${req.params.artist_id}/top`);

    if (response.data) {
        res.status(200).json(response.data)
    } else {
        res.sendStatus(400);
    }
});

app.get('/api/albums/:artist_id', async (req, res) => {

    const response = await fetchResponseByURL(`artist/${req.params.artist_id}/albums`);
    if (response.data) {
        res.status(200).json(response.data)
    } else {
        res.sendStatus(400);
    }
});


// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// Start the server
var server = http.createServer(app);

server.listen(process.env.SERVER_PORT || 3001)
    .on('listening', () => console.log(`Go to http://localhost:${process.env.SERVER_PORT}/api to run queries!`))
    .on('error', (error) => { throw error });