"use strict";

class JobRelationMapper {
    
    constructor(){
        this.relationMap = new Map()
    }
    
    getUpStream = (jobId)=>{
        return this.relationMap.get(jobId);
    }

    addUpStream = (parentJobId, jobId)=>{
        upStreamEntities = this.relationMap.get(parentJobId);
        if(upStreamEntities){
            upStreamEntities.push(jobId);
            this.relationMap.set(parentJobId,upStreamEntities);
        }else{
            upStreamEntities = new Array()
            upStreamEntities.push(jobId)
            this.relationMap.set(parentJobId,upStreamEntities)
        }
    }

}