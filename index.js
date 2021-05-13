const express = require('express');
const app = express();
const connectDB = require('./database/db');

// Connect to database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.use('/api', require('./route/route'));

const PORT = process.env.PORT || 1700;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
