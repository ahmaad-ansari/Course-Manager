const e = require("express");
var express = require("express");
var router = express.Router();
var db = require("../database");

router.post("/getEnrolledCourse", (req, res) => {
    const account_id = req.body.account_id;
    var query = "";
    
    if (account_id){
        query = `
        SELECT C.*, A.first_name, A.last_name
        FROM course C
        JOIN course_enrollment CE ON C.course_id = CE.course_id
        JOIN account A ON C.lec_id = A.account_id
        WHERE CE.stud_id = '${account_id}' AND C.dept_id = (
            SELECT S.dept_id
            FROM student S
            WHERE S.stud_id = '${account_id}'
        )`
        
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

router.post("/getAllCourse", (req, res) => {
    const account_id = req.body.account_id;
    const dept_id = req.body.dept_id;
    var query = "";
    
    if (dept_id && !account_id){
        query = `SELECT * FROM course WHERE dept_id = '${dept_id}'`;
    } else if (!dept_id && account_id){
        query = `SELECT *
        FROM course C
        WHERE C.dept_id = (
            SELECT S.dept_id
            FROM student S
            WHERE S.stud_id = '${account_id}'
        )
        
        EXCEPT
        
        SELECT C.*
        FROM course C
        JOIN course_enrollment CE ON C.course_id = CE.course_id
        WHERE C.dept_id = (
            SELECT S.dept_id
            FROM student S
            WHERE S.stud_id = '${account_id}'
        ) AND CE.stud_id = '${account_id}'`;
    } else {
        query = `SELECT * FROM course`;
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

router.post("/dropCourse", (req, res) => {
    const account_id = req.body.account_id;
    const course_id = req.body.course_id;
    var query = "";
    
    if (account_id && course_id){
        query = `
        DELETE FROM course_enrollment WHERE stud_id = '${account_id}' AND course_id = '${course_id}'
        `;
        
        db.query(query, (err, result) => {
            if (err) {
                res.send({ err: err });
            }
    
            if (result.length != 0) {
                query = `
                UPDATE course C
                SET C.stud_limit = C.stud_limit + 1
                WHERE C.course_id = '${course_id}' AND C.dept_id = (
                    SELECT S.dept_id
                    FROM student S
                    WHERE S.stud_id = '${account_id}'
                );`;
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
    } else {
        res.status(401).send({ message: "Failed" });
    }
});

router.post("/registerCourse", (req, res) => {
    const account_id = req.body.account_id;
    const course_id = req.body.course_id;
    var query = "";
    
    if (account_id && course_id){
        query = `
        INSERT INTO course_enrollment (stud_id, course_id) values ('${account_id}', '${course_id}');
        `;
        
        db.query(query, (err, result) => {
            if (err) {
                res.send({ err: err });
            }
    
            if (result.length != 0) {
                query = `
                UPDATE course C
                SET C.stud_limit = C.stud_limit - 1
                WHERE C.course_id = '${course_id}' AND C.dept_id = (
                    SELECT S.dept_id
                    FROM student S
                    WHERE S.stud_id = '${account_id}'
                );`;
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
    } else {
        res.status(401).send({ message: "Failed" });
    }
});

router.post("/getPrereq", (req, res) => {
    const course_id = req.body.course_id;
    const prereq_id = req.body.prereq_id;
    var query = "";
    
    if (course_id && prereq_id){
        query = `SELECT * FROM prereq WHERE course_id = '${course_id}' AND prereq_id = '${prereq_id}'`;
    } else if (course_id){
        query = `SELECT prereq_id FROM prereq WHERE course_id = '${course_id}'`;
    } else if (prereq_id){
        query = `SELECT course_id FROM prereq WHERE prereq_id = '${prereq_id}'`;
    } else {
        query = `SELECT * FROM prereq`;
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

router.post("/getDept", (req, res) => {
    const course_id = req.body.course_id;
    var query = "";

    if(course_id){
        var query = `
        SELECT C.dept_id
        FROM course C
        WHERE C.course_id = '${course_id}'
        GROUP BY C.dept_id`;
    } else {
        var query = `
        SELECT C.dept_id
        FROM course C
        GROUP BY C.dept_id`;
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

router.post("/getLec", (req, res) => {
    var query = `
    SELECT C.lec_id
    FROM course C
    GROUP BY C.lec_id`;
    
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

router.post("/addCourse", (req, res) => {
    const course_id = req.body.course_id;
    const course_name = req.body.course_name;
    const dept_id = req.body.dept_id;
    const lec_id = req.body.lec_id;
    const credit = req.body.credit;
    const term = req.body.term;
    const stud_limit = req.body.stud_limit;
    
    var query = `insert into course (course_id, course_name, dept_id, lec_id, credit, term, stud_limit) values ('${course_id}', '${course_name}', '${dept_id}', '${lec_id}', ${credit}, '${term}', ${stud_limit});`;
    
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

router.post("/deleteCourse", (req, res) => {
    const course_id = req.body.course_id;
    const dept_id = req.body.dept_id;
    
    var query = `DELETE FROM cms.course WHERE course_id = '${course_id}' AND dept_id = '${dept_id}';`;
    
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

router.post("/getCourseId", (req, res) => {
    var query = `
    SELECT C.course_id
    FROM course C
    GROUP BY C.course_id`;
    
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