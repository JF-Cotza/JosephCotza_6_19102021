//ajout des modules
const express=require('express');
const mongoose=require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');          
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');

//création de app, "l'application du backend"
const app=express();

//création des routes
const user=require('./routes/user');
const sauce=require('./routes/sauce')







module.exports =app; //sert à renvoyer les infos vers le frontend


