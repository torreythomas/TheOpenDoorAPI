const Jobs = require("../models/jobs");


module.exports = {

    index: (req,res) => {
        Jobs.find({}).then(jobs =>{
            res.json(jobs);
        });
    },
    create: (req,res) => {
        const newJobs = req.body; 

        Jobs.create(newJobs).then(jobs => res.json(jobs));
    },
    show: (req,res) => {
        Jobs.findOne({company: req.params.company}).then(jobs =>
            res.json(jobs));
    },
    update: (req,res) => {
        const updatedJobs = req.body;

        Jobs.findOneAndUpdate({company: req.params.company}, updatedJobs, {
            new: true
        }).then(jobs => res.json(jobs));
    },
    destroy: (req,res) => {
        Jobs.findOneAndDelete({company: req.params.company}).then(jobs => res.json(jobs));
    }
}