var express = require('express');
var router = express.Router();
var Task = require('../models/Task');

/* GET users listing. */
router.post('/api/tasks',async function(req, res, next) {
    const { title, description, dueDate,status } = req.body;
    const task = new Task({
        title,
        description,
        dueDate,
        status,
      });
    try {
        await task.save();
        return res.status(200).json({ message: "task created successfully" });
      } catch (err) {
        console.error(error, "Error during task registration");
        res.status(500).json({ errors: [{ msg: "Internal server error" }] });
      }
});
router.get('/api/tasks',async function(req, res, next) {
    Task.find({}).then((result)=>
        {
          res.json({data:result})
        }).catch(err=>
        {
            console.log("er 17",err)
        }) 
});
router.put('/api/tasks/:id',async function(req, res, next) {
    const id=req.params.id
    Task.findByIdAndUpdate(id)
 .then(result => {

     res.json({ data: [result]});
 })
     .catch((err) =>
     {
     console.log("error back in view")
     });
});
router.delete('/api/tasks/:id',async function(req, res, next) {
    const prid=req.params.id
    Task.findByIdAndDelete(prid).then((data1) =>
        {
           
            res.json({ data: [result]});
        })
        .catch((err) =>
            {
            console.log("error back in view")
            });
});
module.exports = router;
