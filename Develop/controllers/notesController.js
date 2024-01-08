const notes = require('../db/db.json');
const fs = require('fs/promises');

const getNotes = (req, res) => {
    res.json(notes);
};


const postNotes = async (req, res) => {
    const notesDb = JSON.parse(JSON.stringify(notes));
    notesDb.push(req.body);

    try {
        await fs.writeFile('../db/db.json', JSON.stringify(notesDb, null, 2));
        res.json(req.body);
    } catch (err) {
        res.status(500).json({ error });
    }
};

module.exports = { getNotes, postNotes };