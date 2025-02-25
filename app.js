require('dotenv').config({path: `${process.cwd()}/.env`});
const express = require('express');
const app = express();

const todoRoutes = require('./routes/todoRoutes');
app.use('/todo', todoRoutes);

app.use('*', (req, res, next) => {
    res.status(404).json({
        status: "error",
        message: "Route not found"
    });
});

app.get('/', (req, res) => {
    res.status(200).json({
        status: "success",
        message: "API is running"
    });
});

const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, () => {
    console.log("API is running on port", PORT);
});