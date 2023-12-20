const express = require('express');
const { createBlog, getAllBlogs } = require('./blogController');
const router = express.Router()

router.post('/createBlog', createBlog)
router.get('/getAllBlogs',getAllBlogs)

 module.exports = router