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
        Jobs.findOne({name: req.params.name}).then(jobs =>
            res.json(jobs));
    },
    update: (req,res) => {
        const updatedJobs = req.body;

        Jobs.findOneAndUpdate({name: req.params.name}, updatedJobs, {
            new: true
        }).then(jobs => res.json(jobs));
    },
    destroy: (req,res) => {
        Jobs.findOneAndDelete({name: req.params.name}).then(jobs => res.json(jobs));
    }
}