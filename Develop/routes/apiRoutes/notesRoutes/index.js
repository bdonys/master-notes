const router = require('express').Router();
const path = require('path');

const {
    getNotes,
    postNotes
} = require('../../../controllers');

router.get('/', (req, res) => {
    const notesPath = path.join(__dirname, '../../../public/notes.html');
    res.sendFile(notesPath);
});

router.get('/', getNotes);
router.post('/', postNotes);




module.exports = router;