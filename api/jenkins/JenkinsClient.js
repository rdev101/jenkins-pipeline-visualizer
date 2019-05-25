const axios = require('axios');
const config = require("../config")

function queryJobs(){
    reqUrl = `${config.JENKINS_URL}/api/json/`;
    return axios.get(reqUrl);
}

module.exports = {
    queryJobs
}