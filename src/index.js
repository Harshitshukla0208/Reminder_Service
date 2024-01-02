const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig')
const cron = require('node-cron');

const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT , () => {
        console.log(`Server Started at port ${PORT}`);

        cron.schedule('*/2 * * * *', () => {
            console.log('running a task every two min')
        })
    })
}

setupAndStartServer();