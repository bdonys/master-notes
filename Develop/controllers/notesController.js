const path = require('path');
const notes = require('../db/db.json');
const fs = require('fs/promises');

const getNotes = (req, res) => {
    res.json(notes);
};

const postNotes = async (req, res) => {
    const notesDb = JSON.parse(JSON.stringify(notes));
    notesDb.push(req.body);

    try {
        const filePath = path.join(__dirname, '../db/db.json');
        await fs.writeFile(filePath, JSON.stringify(notesDb, null, 2));
        res.json(req.body);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
};



module.exports = { getNotes, postNotes };