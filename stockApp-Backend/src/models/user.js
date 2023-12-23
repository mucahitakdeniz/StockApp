"use strict";

const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */
/* ------------------------------------------------------- *
{
    "username": "admin",
    "password": "aA*123456",
    "email": "admin@site.com",
    "first_name": "admin",
    "last_name": "admin",
    "is_active": true,
    "is_staff": true,
    "is_superadmin": true
}
{
    "username": "staff",
    "password": "aA*123456",
    "email": "staff@site.com",
    "first_name": "staff",
    "last_name": "staff",
    "is_active": true,
    "is_staff": true,
    "is_superadmin": false
}
{
    "username": "test",
    "password": "aA*123456",
    "email": "test@site.com",
    "first_name": "test",
    "last_name": "test",
    "is_active": true,
    "is_staff": false,
    "is_superadmin": false
}
/* ------------------------------------------------------- */

const UserShema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: true,
    index: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
    index: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
    index: true,
  },
  first_name: {
    type: String,
    trim: true,
    required: true,
  },
  last_name: {
    type: String,
    trim: true,
    required: true,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
  is_staff: {
    type: Boolean,
    default: false,
  },
  is_superadmin: {
    type: Boolean,
    default: false,
  },
}, {collection:'users',timestamps:true});

const pasEnc= require('../helpers/passwordEncrypt')


// save || update 
UserShema.pre(['save','updateOne'],function(next){
    const data = this._update || this 

    //email validation 
    const isEmailValidated = data.email ? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email) : true ;

    // pasword validation
    const isPasswordValidated = data.password ? /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-+_]).{8,}$/.test(data.password) : true 

    if(isEmailValidated && isPasswordValidated) {
        
        this.password= pasEnc(data.password)
        this._update=data
        next()

    } else {
        if(!isEmailValidated) next('Email not validated')
        if(!isPasswordValidated) next('Password not validated')
    }
})

//  perform an action before initialization

UserShema.pre('init', function(data) {
    
    data.createds= data.createdAt.toLocaleDateString('tr-tr')

})

module.exports= mongoose.model('User', UserShema)

