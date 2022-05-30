//require consts
const router = require('express').Router()
const sequelize = require('../connection/connection')
const withAuth = require('../utils/auth')

//user models
const [Post, User, Comment] = require('../models')

//