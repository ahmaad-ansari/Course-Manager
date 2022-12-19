var express = require("express");
var router = express.Router();
var db = require("../database");

router.post("/getStudent", (req, res) => {
    const dept_id = req.body.dept_id;
    const stud_id = req.body.stud_id;
    var query = "";
    
    if (stud_id && dept_id){
        query = `SELECT * FROM student WHERE stud_id = '${stud_id}' AND dept_id = '${dept_id}'`;
    } else if (stud_id){
        query = `SELECT dept_id FROM student WHERE stud_id = '${stud_id}'`;
    } else if (dept_id){
        query = `SELECT stud_id FROM student WHERE dept_id = '${dept_id}'`;
    } else {
        query = `SELECT * FROM student`;
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


module.exports = router;