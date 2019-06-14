const axios = require('axios');
const router = require("express").Router();
const authorization = require("./authorization.js");

router.get("/", authorization, async (req, res) => {
    const requestOptions = {
      headers: { accept: 'application/json' },
    };

    try {
        const jokes =  await axios.get(
            'https://icanhazdadjoke.com/search', 
            requestOptions
        );
        if (jokes) {
            res.status(200).json(jokes.data.results);
        }
    } catch (error) {
        res.status(500).json({ message: `Jokes could not be found ${error}.` });
    }
});

module.exports = router;
