const db = require("../models/index")
const express = require('express');
const router = new express.Router()
const users = db.users;

router.post('/user',async(req,res)=>{
      const user = {
        Name: req.body.Name,
        Email: req.body.Email
      };
      users.create(user)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the User."
          });
        });
  
})

router.get('/user/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await users.findByPk(_id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})



module.exports=router

    