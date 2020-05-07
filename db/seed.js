const Jobs = require("../models/countries");
const data = require("./data.json");


let JobsData =  data.map(jobs => {
    let myData = {
        id: jobs.id,
        type: jobs.type,
        company: jobs.company,
        url: jobs.url,
        location: jobs.location,
        title: jobs.title,
        description: jobs.description,
        apply: jobs.apply,
        logo: jobs.logo
    };
return myData;
});

Jobs.remove({}).then(jobs => {
    jobs.collection.insert(JobsData).then(jobs => {
        console.log(jobs);
    });
});