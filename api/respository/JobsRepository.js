const jenkinsClient = require('../jenkins/JenkinsClient')
const JobEntity = require('../model/JobEntity')

class JobsRepository {
  
  getAllJobs() {
    return new Promise((resolve, reject) => {
      jenkinsClient.queryJobs().then(
          response => {
            var responseData = {
              jobs: new Array()
            }
            response.data.jobs.forEach(element => {
              responseData.jobs.push(new JobEntity(element.name, element.url));
            });
            resolve(responseData);
          }
        ).catch(error => {
          reject(error);
        })
    });
  }

  getAllJobRelationMap(){
    return new Promise((resolve, reject) => {
      getAllJobs().then(
          data => {
            resolve(data);
          }
        ).catch(error => {
          reject(error);
        })
    });
  }

}

module.exports = JobsRepository;
