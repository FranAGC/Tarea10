const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send("Listado de productos");
});


router.post('/', (req, res) => {
    const body = req.body;
    res.json({
        message: 'Crear un usuario',
        data: body
    })
})


module.exports = router;