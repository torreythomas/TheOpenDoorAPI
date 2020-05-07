const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const jobsSchema = new Schema ({
    id: String,
    type: String,
    company: String,
    company_url: String,
    location: String,
    title: String,
    description: String,
    how_to_apply: String,
    company_logo: String 
});

const Jobs = mongoose.model("Jobs", jobsSchema);
module.exports = Jobs;


