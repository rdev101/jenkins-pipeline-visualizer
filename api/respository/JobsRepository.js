class JobsRepository {
  getAllJobs() {
    const data = [
      {
        id: "job1",
        downstream: null
      },
      {
        id: "job2",
        downstream: {
          id: "job2:subjob1",
          downstream: null
        }
      }
    ];
    return data;
  }
}

module.exports = JobsRepository;
