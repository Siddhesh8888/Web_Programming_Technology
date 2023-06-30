const express = require("express");
const router = express.Router();
const connection = require("../db/dbconnect");

router.get("/employees", function (req, resp) {
  connection.query("select * from employee", (err, result, field) => {
    if (err) {
      resp.status(500).send("Data not find!! " + JSON.stringify(err));
    } else {
      resp.send(result);
    }
  });
});

router.get("/employees/employee/:empid", (req, resp) => {
  connection.query(
    "select * from employee where empid=?",
    [req.params.empid],
    (err, result) => {
      if (err) {
        resp.status(500).send("Data not founded!! " + JSON.stringify(err));
      } else {
        resp.send(result[0]);
      }
    }
  );
});

router.post("/employees/employee", (req, resp) => {
  var empid = req.body.empid;
  var ename = req.body.ename;
  var sal = req.body.sal;
  connection.query(
    "insert into employee values(?,?,?)",
    [empid, ename, sal],
    (err, result) => {
      if (err) {
        resp.status(500).send("Data not inserted!!! " + JSON.stringify(err));
      } else {
        if (result.affectedRows > 0) {
          resp.send("{'msg':'inserted successfully'}");
        } else {
          resp.send("{'msg':'not inserted'}");
        }
      }
    }
  );
});

router.put("/employees/employee/:empid", (req, resp) => {
  var empid = req.body.empid;
  var ename = req.body.ename;
  var sal = req.body.sal;
  connection.query(
    "update employee set ename=?, sal=? where empid=?",
    [ename, sal, empid],
    (err, result) => {
      if (err) {
        resp.status(500).send("Record not updated!! " + JSON.stringify(err));
      } else {
        if (result.affectedRows > 0) {
          resp.send("{'msg'}:{'update successfully'}");
        } else {
          resp.send("{'msg':'not updated'}");
        }
      }
    }
  );
});

router.delete("/employees/employee/:eid", (req, resp) => {
  connection.query(
    "delete from employee where empid=?",
    [req.params.eid],
    (err, result) => {
      if (err) {
        resp.status(500).send("data not deleted!! " + JSON.stringify(err));
      } else {
        if (result.affectedRows > 0) {
          resp.send("{'msg':'deleted successfully'}");
        } else {
          resp.send("{'msg':'not deleted'}");
        }
      }
    }
  );
});

module.exports = router;
