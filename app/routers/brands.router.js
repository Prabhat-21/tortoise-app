const db = require("../models/index")
const express = require('express');
const router = new express.Router()
const brands = db.brands;



router.post('/brand', async (req, res) => {
    const data = req.body
    const brand = brands.build(data)
    try {
        await brand.save()
        res.status(201).send(brand)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/brand/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const brand = await brands.findByPk(_id)

        if (!brand) {
            return res.status(404).send()
        }

        res.send(brand)
    } catch (e) {
        res.status(500).send()
    }
})



module.exports=router

    