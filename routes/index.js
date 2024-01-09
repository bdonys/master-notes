const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const notesPageRoutes = require('./notesPageRoutes');

router.use('/api', apiRoutes);
router.use('/', notesPageRoutes);



module.exports = router;