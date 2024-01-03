const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig')
const jobs = require('./utils/job');
const TicketController = require('./controllers/ticket-controller')

const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.post('/api/v1/tickets', TicketController.create)

    app.listen(PORT , () => {
        console.log(`Server Started at port ${PORT}`);
        jobs();
        // cron.schedule('*/2 * * * *', () => {
        //     console.log('running a task every two min')
        // })
    })
}

setupAndStartServer();