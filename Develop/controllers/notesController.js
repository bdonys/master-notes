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

const deleteNotes = async (req, res) => {
    const noteId = req.params.id;
    const notesDb = JSON.parse(JSON.stringify(notes));
    const noteIndex = notes.findIndex((note) => note.id === noteId);

    if (noteIndex !== -1) {
        notesDb.splice(noteIndex, 1);
    
        try {
            await fs.writeFile('../db/db.json', JSON.stringify(notesDb, null, 2));
            res.json({ message: 'Note deleted' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: err });
        }
    } else {
        res.status(404).json({ error: 'Note not found' });
    }
}



module.exports = { getNotes, postNotes, deleteNotes };