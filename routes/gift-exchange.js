const express = require("express");
const router = express.Router();

// router.use(express.json());

router.post("/pairs", (request, response) => {
    response.status(200).json(request.body.mes)
});

router.post("/traditional", (request, response) => {
    response.status(200).json(request.body.names)
});

module.exports = router;