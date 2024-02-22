const express = require('express');
// const mysql = require('mysql');
const mysql = require('mysql2');
// const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8080;

// app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '1030',
//     database: 'emp'
// });

const db=mysql.createConnection(`mysql://root:BEC422B14D3baCb4gdfg41HaEgCFa5Ba@monorail.proxy.rlwy.net:25149/railway`)

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL database');
});

app.post('/register', (req, res) => {
    console.log(req.body);
    const { id, name, designation, department, dob, email, address } = req.body;
    const sql = "INSERT INTO emps (id,name, designation, department, dob, email, address) VALUES (?,?, ?, ?, ?, ?, ?)";
    const values = [ id, name, designation, department, dob, email, address];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error inserting employee:', err);
            return res.status(500).json({ error: "Error in inserting employee" });
        }
        console.log('Employee inserted successfully:', data);
        return res.status(200).json({ message: "Employee inserted successfully" });
    });
});


// Add this route to your backend Express.js application

app.get('/employees', (req, res) => {
    const sql = "SELECT * FROM emps"; // Assuming your table name is 'emps'

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching employees:', err);
            return res.status(500).json({ error: "Error fetching employees" });
        }
        console.log('Employees fetched successfully:', results);
        return res.status(200).json(results);
    });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
