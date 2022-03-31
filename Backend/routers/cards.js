const express = require('express')
const router = express.Router()
const Card = require('../models/card')

router.get('/' , async (req, res)=>{
    //res.send('get request')  
    res.set('Access-Control-Allow-Origin', '*');
    try{
        const cards = await Card.find()
        res.json(cards)
    }catch(err){
        res.send('Error' +err)
    }
})

router.get('/:id' , async (req, res)=>{
    try{
        const card = await Card.findById(req.params.id)
        res.json(card)
    }catch(err){
        res.send('Error' +err)
    }
})


router.post('/', async(req, res) =>{
    const card = new Card({
        title: req.body.title,
        description : req.body.description 
    })
    try{
        const a1 = await card.save()
        res.json(a1)

    }catch(err){
        res.send('error' +err)
    }
})



module.exports = router