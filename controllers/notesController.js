const path = require('path');
const notes = require('../db/db.json');
const fs = require('fs/promises');
const { v4: uuid } = require('uuid');

const getNotes = (req, res) => {
    res.json(notes);
};

const postNotes = async (req, res) => {
    const newNote = {
        id: uuid(),
        title: req.body.title,
        text: req.body.text
    }

    const notesDb = JSON.parse(JSON.stringify(notes));
    notesDb.push(newNote);

    try {
        const filePath = path.join(__dirname, '../db/db.json');
        await fs.writeFile(filePath, JSON.stringify(notesDb, null, 2));
        res.json(newNote);
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
            const filePath = path.join(__dirname, '../db/db.json');
            await fs.writeFile(filePath, JSON.stringify(notesDb, null, 2));
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