var express = require("express");
var router = express.Router();
var JobsRepo = require("../respository/JobsRepository");
var jobsRepo = new JobsRepo();

router.get("/", function(req, res) {
  jobsRepo.getAllJobs().then(data => res.send(data))
  .catch(error => {
    console.log(error)
    res.status(500)
    res.json({message: error.message});
  })
});

module.exports = router;
