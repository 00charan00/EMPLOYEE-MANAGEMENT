const express = require('express');
const mysql = require('mysql');
// const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8080;

// app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1030',
    database: 'emp'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL database');
});

app.post('/register', (req, res) => {
    console.log(req.body);
    const { name, designation, department, dob, email, address } = req.body;
    const sql = "INSERT INTO employees (name, designation, department, dob, email, address) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [name, designation, department, dob, email, address];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error inserting employee:', err);
            return res.status(500).json({ error: "Error in inserting employee" });
        }
        console.log('Employee inserted successfully:', data);
        return res.status(200).json({ message: "Employee inserted successfully" });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
