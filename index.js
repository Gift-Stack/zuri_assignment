const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./database/db');

// Enable CORS to requests
app.use(cors());

// Connect to database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.use('/', require('./route/route'));

const PORT = process.env.PORT || 1700;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
