const db = require("../models/index")
const express = require('express');
const router = new express.Router()
const customerGoals = db.customerGoals;
const plans = db.plans;


router.post('/customerGoals', async (req, res) => {

    const data = req.body

    const plan = await plans.findByPk(data.planID)

    if(!plan){
        return res.status(404).send({
            message:"plan does not exist"
        })
    }

    data.planName = plan.planName;

    if(!plan.amountOptions.includes(data.selectedAmount)){
        res.status(404).send({
            message:"selected amount is not available"
        })
    }

    if(!plan.tenureOptions.includes(data.selectedTenure)){
        res.status(404).send({
            message:"selected tenure is not available"
        })
    }

    data.benefitPercentage =  plan.benefitPercentage;

    data.benefitType =  plan.benefitType;

    const Goal = customerGoals.build(data)
    try {
        await Goal.save()
        res.status(201).send(Goal)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/customerGoal/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const customerGoal = await customerGoals.findByPk(_id)

        if (!customerGoal) {
            return res.status(404).send()
        }

        res.send(customerGoal)
    } catch (e) {
        res.status(500).send()
    }
})



module.exports=router

    