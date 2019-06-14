const axios = require('axios');
const router = require("express").Router();
const authorization = request("./authorization");

router.get("/", authorization, async (req, res) => {
    const requestOptions = {
      headers: { accept: 'application/json' },
    };

    try {
        const response = axios.get(
            'https://icanhazdadjoke.com/search', 
            requestOptions
        );
        if (response) {
            res.status(200).json(response.data.results);
        }
    } catch (error) {
        res.status(500).json({ message: `Jokes could not be found ${error}.` });
    }
});

module.exports = router;
