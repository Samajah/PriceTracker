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