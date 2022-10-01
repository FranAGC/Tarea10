const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send("listado de usuarios");
});


router.post('/', (req, res) => {
    const body = req.body;
    res.json({
        message: 'Crear producto',
        data: body
    })
})


module.exports = router;