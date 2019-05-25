class JobEntity {
    constructor(id, url){
        this.id = id;
        this.url = url;
    }

    getId(){
        return this.id
    }

    getUrl(){
        return this.url
    }
}

module.exports = JobEntity;

