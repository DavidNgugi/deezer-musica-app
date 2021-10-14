const app = require('./app');

require('dotenv').config()

try {
    app.listen(process.env.SERVER_PORT || process.env.PORT || 8001, "0.0.0.0", () =>
        console.log(`Go to http://localhost:${process.env.SERVER_PORT}/api to run queries!`)
    );
} catch (error) {
    console.log(`Can't start server on ${process.env.SERVER_PORT}.`)
    throw error;
}