const express = require('express');
const { createServiceGallery, getAllServiceGallery, createFacilities, getAllFacilities } = require('./AllGalleryController');
const router = express.Router()

router.post('/cerateService',createServiceGallery)
router.post('/createFacilities',createFacilities)
router.get('/getAllServiceGallery',getAllServiceGallery)
router.get('/getAllFacilities',getAllFacilities)


module.exports = router