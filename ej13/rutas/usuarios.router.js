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
});


router.put('/:id', (req, res) => {
    const {id} = req.params;
    const body = req.body;

    res.json({
        message: "Actualizar un usuario",
        data: body,
        id,
    })
})


router.delete('/:id', (req, res) => {
    const {id} = req.params;
    const body = req.body;

    res.json({
        message: "Borrar un usuario",
        id,
    })
});



module.exports = router;