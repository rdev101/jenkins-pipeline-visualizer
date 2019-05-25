const axios = require("axios");

function getJobsAsync() {
  return axios.get("/api/v1/jobs");
}

export { getJobsAsync };
