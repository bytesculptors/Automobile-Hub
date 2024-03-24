const express = require("express");

const mysql = require('mysql');

const cors = require('cors');

const { check, validationResult } = require('express-validator');

const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Soi07052003@',
    database: 'car_rental'
})

app.post('/signup', (req, res) => {
    const sql = 'INSERT INTO `user` (`user_name`, `user_email`, `pass_word`, `access`, `full_name`, `citizenID`, `phone_number`, `address`, `date_of_birth`) VALUES (?)';
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
        "user",
        req.body.full_name,
        req.body.citizenID,
        req.body.phone_number,
        req.body.address,
        req.body.date_of_birth
    ];

    db.query(sql, [values], (err, data) => {
        if (err) {
            console.log(err);
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/login',
    (req, res) => {
        const sql = "SELECT * FROM user WHERE user_name = ? AND pass_word = ?";

        db.query(sql, [req.body.userName, req.body.password], (err, data) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.json(errors);
            } else {
                if (err) { return res.json("Error"); }
                if (data.length > 0) {
                    return res.json(data);
                } else {
                    return res.json("Faile");
                }
            }
        })
    })

app.get('/dashboard', (req, res) => {
    if (req.body.key === 'get Car Data') {
        const sql = "SELECT * FROM cars";
        db.query(sql, (err, data) => {
            if (err) {
                console.log(err);
                return res.json("Error");
            }
            return res.json(data);
        })
    } else if (req.body.key === 'get User Data') {
        const sql = "SELECT * FROM `user` WHERE access = 'user' ";
        db.query(sql, (err, data) => {
            if (err) {
                console.log(err);
                return res.json("Error");

            }
            return res.json(data);
        })
    } else if (req.body.key === "delete car") {
        const sql = "DELETE FROM `cars` WHERE car_id = ?";
        console.log(req.body)
        db.query(sql, req.body.value.car_id, (err, data) => {
            if (err) {
                console.log(err);
                return res.json("Error");
            }
            return res.json(data)
        })
    } else {
        const sql = 'INSERT INTO `cars`(`brand`, `model`, `year`, `tranmission`, `num_seats`, `fuel_type`, `price_per_day`, `image`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        db.query(sql, [req.body.brand, req.body.model, req.body.year, req.body.transmission, req.body.num_seats, req.body.fuel_type, req.body.price_per_day, req.body.image], (err, data) => {
            if (err) {
                console.log(err);
                return res.json("Error");
            }
            return res.json("Success");
        })
    }
})

app.post('/booking',
    (req, res) => {
        if (req.body.key === "get Booking Data") {
            const sql =
                `SELECT b.start_date, b.end_date, b.total_price, c.brand, c.model, u.full_name, u.user_email
                FROM bookings b
                JOIN cars c ON b.car_id = c.car_id
                JOIN user u ON b.user_id = u.user_id`;
            db.query(sql, (err, data) => {
                if (err) {
                    console.log(err);
                    return res.json("get Booking Data Error!");
                } else {
                    return res.json(data);
                }
            })
        }
    })



app.post("/profile",
    (req, res) => {
        const newUser = req.body;

        const sql = "UPDATE `user` SET `user_name` = ?, `pass_word` = ?, `user_email` = ?, `full_name` = ?, `phone_number` = ?, `citizenID` = ?, `user_images` = ?, `address` = ? WHERE `user_name` = ?";


        const values = [
            newUser.user_name,
            newUser.pass_word,
            newUser.user_email,
            newUser.full_name,
            newUser.phone_number,
            newUser.citizenID,
            newUser.user_images,
            newUser.address,
            newUser.user_name,
        ];
        // console.log(values);
        db.query(sql, values, (err, data) => {
            if (err) {
                console.log(err);
                return res.json("Cap nhat that bai");
            } else {
                console.log(1);
                return res.json("Success");
            }
        })

    })


app.post("/new_booking", (req, res) => {

    const newBooking = req.body;

    const start = new Date(newBooking.startDate);
    const end = new Date(newBooking.endDate);
    const days = Math.ceil(Math.abs(end - start) / (1000 * 60 * 60 * 24));
    const totalPrice = days * newBooking.price_per_day;

    const sql = "INSERT INTO bookings (user_id, car_id, start_date, end_date, total_price) VALUES (?, ?, ?, ?, ?)";
    const values = [
        newBooking.userId,
        newBooking.carId,
        newBooking.startDate,
        newBooking.endDate,
        totalPrice
    ];
    console.log(values);

    db.query(sql, values, (err, data) => {
        if (err) {
            console.log(err);
            return res.json("Cap nhat that bai");
        } else {
            console.log(1);
            return res.json("Success");
        }
    })
});

//GET ALL CARS DETAILS
app.get("/cars/all", (req, res) => {
    const sql = "SELECT * FROM cars";
    db.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.get("/cars/:brand_name", (req, res) => {
    const brand_name = req.params.brand_name
    const sql = `SELECT * FROM cars WHERE brand = '${brand_name}'`;
    db.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            return res.json("Error");
        }
        console.log(data);
        return res.json(data);
    })
})

app.get("/brands", (req, res) => {
    const sql = `SELECT DISTINCT brand FROM cars`;
    db.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            return res.json("Error");
        }
        console.log(data);
        return res.json(data);
    })
})
app.listen(8082, () => { console.log("listening"); })