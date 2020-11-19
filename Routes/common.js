const express = require('express');
const router = express.Router();

const CommonFunctions = require('../Controller/data');

router.get('/byAge', async (req, res) => {
    try{
        let result =  CommonFunctions.StortJsonByAge();        
        res.status(200).json({Data:result});
        
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Something went wrong"});

    }
});

router.get('/marksSum', async (req, res) => {
    try{
        
        let result =  CommonFunctions.getSumOfMarks();        
        res.status(200).json({TotalMarks:result});
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Something went wrong"});
    }
});


module.exports = router;