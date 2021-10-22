'use strict'

const express = require('express')
const {upload} = require('../helpers/filehelper')
const {singleFileUpload,multipleFileUpload,getallSingleFiles,getallMultipleFiles} = require('../controllers/fileuploaderController')
const router = express.Router();

router.post('/singleFile',upload.single('file'),singleFileUpload);
router.post('/multipleFiles',upload.array('files'),multipleFileUpload);
router.get('/getallSingleFiles',getallSingleFiles)
router.get('/getallMultipleFiles',getallMultipleFiles)

module.exports = router
