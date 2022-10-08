const express = require('express');
const {
    getAllBootcamps,
    getBootcamps,
    createBootcamps,
    updateBootcamps,
    deleteBootcamps
} = require('../controllers/bootcamps');

const router = express.Router();

router
      .route('/')
      .get(getAllBootcamps)
      .post(createBootcamps);

router
      .route('/:id')
      .get(getBootcamps)
      .put(updateBootcamps)
      .delete(deleteBootcamps) ;     

module.exports = router;