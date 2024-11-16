// Importing required modules
const express = require('express'); // Framework for building web apps
const app = express(); // Initializing an Express app
const PORT = 3000; // Define the port for the app

// Middleware
app.use(express.json()); // To parse incoming JSON requests
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded requests

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Express App!'); // Home route
});

app.get('/about', (req, res) => {
    res.send('This is the about page.'); // About route
});

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // Log server start
});
