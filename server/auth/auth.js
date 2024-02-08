const express = require('express');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_mysql_username',
    password: 'your_mysql_password',
    database: 'your_database_name'
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

// Authentication routes
app.post('/login', (req, res) => {
    // Handle login logic here
    const { username, password } = req.body;
    // Check if the username and password are valid
    connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (error, results) => {
        if (error) {
            console.error('Error executing MySQL query:', error);
            res.status(500).json({ message: 'Internal server error' });
        } else if (results.length === 1) {
            // Successful login
            const user = results[0];
            const token = jwt.sign({ username: user.username }, 'your_secret_key');
            res.status(200).json({ message: 'Login successful', token });
        } else {
            // Invalid credentials
            res.status(401).json({ message: 'Invalid credentials' });
        }
    });
});

app.post('/register', (req, res) => {
    // Handle registration logic here
    const { username, password } = req.body;
    // Save the user to the database
    connection.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (error) => {
        if (error) {
            console.error('Error executing MySQL query:', error);
            res.status(500).json({ message: 'Internal server error' });
        } else {
            // Registration successful
            res.status(200).json({ message: 'Registration successful' });
        }
    });
});

app.get('/logout', (req, res) => {
    // Handle logout logic here
    // Clear any session data or tokens
    res.status(200).json({ message: 'Logout successful' });
});

// Start the server
app.listen(3000, () => {
    console.log('Authentication server is running on port 3000');
});
