var express = require("express");
var router = express.Router();
var db = require("../database");

router.post("/getAccount", (req, res) => {
    const account_id = req.body.account_id;
    var query = "";
    
    if (account_id){
        query = `SELECT account_id, first_name, last_name, SSN, username, birthdate, address, phone FROM account WHERE account_id = '${account_id}'`;
    } else {
        query = `SELECT account_id, first_name, last_name, SSN, username, birthdate, address, phone FROM account`;
    }

    db.query(query, (err, result) => {
        if (err) {
            res.send({ err: err });
        }

        if (result.length != 0) {
            res.json(result);
        } else {
            res.status(401).send({ message: "Failed" });
        }
    });
});

router.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    var query = "";
    
    if (username && password){
        query = `SELECT account_id, first_name, last_name, permissions FROM account WHERE username = '${username}' AND password = '${password}'`
        
        db.query(query, (err, result) => {
            if (err) {
                res.send({ err: err });
            }
    
            if (result.length != 0) {
                res.json(result);
            } else {
                res.status(401).send({ message: "Failed" });
            }
        });
    } else {
        res.status(401).send({ message: "Failed" });
    }
});

module.exports = router;