let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create a reference to the db schema

let contact = require('../models/contact');

/*Get Contact List page*/
router.get('/',(req,res,next)=>{
    contact.find((err, contactList) => {
         if(err){
             return console.error(err);
         } 
         else{
             console.log(contactList);


            
             res.render('contacts/index', {
                 title: 'Favourite List',
                 contactList: contactList
             });
             
         }   
    });
});

module.exports = router;

