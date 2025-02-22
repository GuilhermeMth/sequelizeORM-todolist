const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        status: "success",
        message: "API is running"
    })
});

app.listen(3000, () => {
    console.log("API is running on port 3000");
});