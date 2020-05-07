const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const jobsSchema = new Schema ({
    id: String,
    type: String,
    company: String,
    url: String,
    location: String,
    title: String,
    description: String,
    apply: String,
    logo: String 
});

const Jobs = mongoose.model("Jobs", jobsSchema);
module.exports = Jobs;