const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 8080 || process.env;

app.get('/', (req, res) => {
    res.send("Hello Word!")
})
app.listen(port, () => {
    console.log(`Cloud computing app listening on port ${port}`);
});