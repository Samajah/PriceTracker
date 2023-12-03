const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const { check, validationResult } = require('express-validator');

const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "PriceTracker"
})

db.connect((error) => {
    if (error) {
        console.error('Error connecting to MySQL database:', error);
    } else {
        console.log('Connected to MySQL database!');
    }
});

// const pool = mysql.createPool({
//     connectionLimit: 10,
//     host: '127.0.0.1',
//     user: 'root',
//     password: '',
//     database: 'PriceTracker',
//   });

app.post("/sign-up", (req, res) => {
    const sql = "INSERT INTO User_Accounts.Accounts (Email,Password) VALUES (?, ?)";
    const values = [
        req.body.email,
        req.body.password]

    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/login', [
    check('email', "Emaill length error").isEmail().isLength({ min: 10, max: 30 }),
    check('password', "password length 8-10").isLength({ min: 8, max: 10 })], (req, res) => {
        const sql = "SELECT * FROM login WHERE email = ? AND password = ?";

        db.query(sql, [req.body.email, req.body.password], (err, data) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.json(errors);
            } else {
                if (err) {
                    return res.json("Error");
                }
                if (data.length > 0) {
                    return res.json("Success");
                } else {
                    return res.json("Failed");
                }
            }
        })
    })

    // process.on('SIGINT', () => {
    //     db.end((err) => {
    //       console.log('MySQL connection closed.');
    //       process.exit(err ? 1 : 0);
    //     });
    //   });

app.listen(3000, () => {
    console.log("listening");
})