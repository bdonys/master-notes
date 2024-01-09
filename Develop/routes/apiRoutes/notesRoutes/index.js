const router = require('express').Router();
const path = require('path');

const {
    getNotes,
    postNotes,
    deleteNotes
} = require('../../../controllers');

router.get('/', getNotes);
router.post('/', postNotes);
router.delete('/:id', deleteNotes);



module.exports = router;