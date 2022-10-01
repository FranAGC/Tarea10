const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send("Listado de productos");
});


router.post('/', (req, res) => {
    const body = req.body;
    res.json({
        message: 'Crear un producto',
        data: body
    })
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const body = req.body;

    res.json({
        message: "Actualizar un producto",
        data: body,
        id,
    })
})


router.delete('/:id', (req, res) => {
    const {id} = req.params;
    const body = req.body;

    res.json({
        message: "Borrar un producto",
        id,
    })
})


module.exports = router;