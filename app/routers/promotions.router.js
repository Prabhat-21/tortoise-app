const db = require("../models/index")
const express = require('express');
const router = new express.Router()
const promotions = db.promotions;
const plans = db.plans;


router.post('/promotion', async (req, res) => {
    const data = req.body
    const plan = await plans.findByPk(data.planID);
    if(!plan){
        res.status(404).send();
    }

    if(data.promotionType=="NoOfUsers"){

        if(!data.Attributes.totalCount>0){
            res.status(400).send()
        }
    }

    else if(data.promotionType=="TimePeriod"){
        if(data.Attributes.startTime == null || data.Attributes.endTime==null){
            res.send(400).send()
        }
        if(!((new Date(data.Attributes.startTime)).getTime() > 0 && (new Date(data.Attributes.endTime)).getTime() > 0 )){
            res.send(400).send()
        }
    }

    const promotion = promotions.build(data);

    try {
        await promotion.save()
        res.status(201).send(promotion)
    } catch (e) {
        res.status(400).send(e)
    }

})

router.get('/promotion/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const promotion = await promotions.findByPk(_id)

        if (!promotion) {
            return res.status(404).send()
        }

        res.send(promotion)
    } catch (e) {
        res.status(500).send()
    }
})



module.exports=router

    