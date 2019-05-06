var express = require("express");
var router = express.Router();
var JobsRepo = require("../respository/JobsRepository");
var jobsRepo = new JobsRepo();

router.get("/", function(req, res) {
  res.json(jobsRepo.getAllJobs());
});

module.exports = router;
