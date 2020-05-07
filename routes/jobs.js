const express = require("express");
const router = express.Router();

const jobsController = require("../controllers/jobs");


router.get("/", jobsController.index);

router.post("/", jobsController.create);

router.get("/:name", jobsController.show);

router.put("/:name", jobsController.update);

router.delete("/:name", jobsController.destroy);


module.exports = router;