const db = require("../models/index")
const express = require('express');
const router = new express.Router()
const plans = db.plans;
const brands = db.brands;



router.post('/plan', async (req, res) => {
    const data = req.body

    const brand = await brands.findByPk(data.brandID);
    if(!brand){
        res.status(404).send({
            message: "Brand does not exist"
        })
    }

    const amountOpt = data.amountOptions;

    if(!amountOpt){
        res.status(404).send({
            message:"Array is null"
        })
    }
    const findInteger = (amountOpt1 = []) => {
        const isInteger = num => {
           return typeof num === 'number';
        };
        const el = amountOpt1.find(isInteger);
        return !!el;
     };

     if(!findInteger(amountOpt)){
         res.status(400).send({
             message:"Please send an integer array eg : [1000,2000,3000]"
         })
     }

    const tenureOpt = data.tenureOptions;

    if(!tenureOpt){
        res.status(404).send({
            message:"Array is null"
        })
    }

     if(!findInteger(tenureOpt)){
         res.status(400).send({
             message:"Please send an integer array eg : [4,8,12]"
         })
     }

     const BenPercentage = data.benefitPercentage;

     if(BenPercentage<0 || BenPercentage>100){
         res.status(400).send({
             message:"Please send a valid benefit percentage i.e [1,100]"
         })
     }

    const plan = plans.build(data)
    try {
        await plan.save()
        res.status(201).send(plan)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/plan/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const plan = await plans.findByPk(_id)

        if (!plan) {
            return res.status(404).send()
        }

        res.send(plan)
    } catch (e) {
        res.status(500).send()
    }
})



module.exports=router

    