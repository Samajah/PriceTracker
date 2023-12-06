const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'PriceTracker'
});

app.post('/sign-up', (req, res) => {
    // res.send('yayyyy success')
    const email = req.body.email;
    const password = req.body.password;
    db.query("INSERT INTO Accounts (Email, Password) VALUES (?, ?)", [email, password], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            // console.log(result)
            res.send({Email : email})
        }
    })
})

app.post('/login', (req, res) => { //added 12/4 5:30pm
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM Accounts WHERE Email = ?", [email] , (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Sdrver Error');
        } else {
            if (results.length > 0) {
                if (results.length > 0) {
                    const storedPassword = results[0].Password;

                    if (storedPassword === password) {
                        res.send({ email: email, message: 'Login success' });
                    } else {
                        res.status(401).send('Invalid email or password');
                    }
                } else {
                    res.status(401).send("Invalid email or password");
                }
            }
        }
    });
});

app.post('/payment', (req, res) => {
    // res.send('yayyyy success')
    const cardNo = req.body.cardNo;
    const expDate = req.body.expDate;
    const CVV = req.body.CVV;
    const userID = 9;
    db.query("INSERT INTO Payment_Method (CardNumber, Expiration_Date, CVV, UserID) VALUES (?, ?, ?, ?)", [cardNo, expDate, CVV, userID], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            // console.log(result)
            res.send({cardNo : cardNo})
        }
    })
})

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM Accounts WHERE Email = ?", [email], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (results.length > 0) {
                // Email exists in the database, now check if the password matches
                const storedPassword = results[0].Password; // Assuming the password column is named 'Password'
                
                // Compare storedPassword with the provided password
                if (storedPassword === password) {
                    res.send({ email: email, message: 'Login successful' });
                } else {
                    res.status(401).send('Invalid email or password');
                }
            } else {
                res.status(401).send('Invalid email or password');
            }
        }
    });
});


// app.post('/login', (req, res) => {
//     // res.send('yayyyy success')
//     const email = req.body.email;
//     const password = req.body.password;
//     db.query("SELECT FROM Accounts (Email, Password) WHERE Email = ?", [email, password], (err, result) => {
//         if (err) {
//             console.log(err)
//         } else {
//             // console.log(result)
//             res.send({Email : email})
//         }
//     })
// })

// app.post('/results', (req, res) => {
//     // res.send('yayyyy success')
//     const item_id = req.body.item_id;
//     const item_name = req.body.item_name;
//     const item_price = req.body.item_price;
//     db.query("INSERT INTO Item_List (Email, Password) VALUES (?, ?)", [email, password], (err, result) => {
//         if (err) {
//             console.log(err)
//         } else {
//             // console.log(result)
//             res.send({Name : item_name})
//         }
//     })
// })

// app.get('/user-homepage', (req, res) => {
//     // res.send('yayyyy success')
//     const item_name = req.body.item_name;
//     const item_price = req.body.item_price;
//     db.query("SELECT FROM Item_List (Name, Price) VALUES (?, ?)", [item_name, item_price], (err, result) => {
//         if (err) {
//             console.log(err)
//         } else {
//             // console.log(result)
//             res.send({Name : item_name})
//         }
//     })
// })

app.listen(8080, () => {
    console.log('server listening on port 8080')
})