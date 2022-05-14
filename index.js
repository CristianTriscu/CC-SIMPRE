const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const messagesRouter = require("./routers/messagesRouter");
const utilsRouter = require("./routers/utilsRouter");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/messages', messagesRouter);
app.use('/utils', utilsRouter);
const port = process.env.port || 8080;

app.get('/', (req, res) => {
    res.send("Hello Word!")
})
app.listen(port, () => {
    console.log(`Cloud computing app listening on port ${port}`);
});

