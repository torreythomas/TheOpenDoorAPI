const jobs = require("../models/jobs");
const data = require("./data.json");



let jobsData =  data.map(jobs => {
    let myData = {
        id: jobs.id,
        type: jobs.type,
        company: jobs.company,
        company_url: jobs.company_url,
        location: jobs.location,
        title: jobs.title,
        description: jobs.description,
        how_to_apply: jobs.how_to_apply,
        company_logo: jobs.company_logo
    };
return myData;
});

jobs.remove({}).then(x => {
   jobs.collection.insert(jobsData).then(x => {
        console.log(x);
    });
});
