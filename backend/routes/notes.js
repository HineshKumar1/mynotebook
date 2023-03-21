const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes')
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');

//Route 1 :Get All the Notes using:Get 'api/notes/fetchalluser' : no Login Required 
router.get('/fetchallnotes', fetchuser, async (req, res) => {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes)
})

//Route 2 :Post Add a New Notes using: Post 'api/notes/addnote' : no Login Required 
router.get('/addnote', fetchuser, [
        //Valitidion for Fields through Express Validtion
        body('title', 'Enter a Valid title').isLength({ min: 3 }),
        body('description', 'Description Must be atleast 5 characters').isLength({ min: 3 }),], async (req, res) => {
                try {
                        //If there are Error Return Bad Request and the errors
                        const errors = validationResult(req);
                        if (!errors.isEmpty()) {
                                return res.status(400).json({ errors: errors.array() });
                        }
                        const { title, description, tag } = req.body;
                        const note = new Notes({
                                title, description, tag, user: req.user.id
                        })
                        const SavedNote = await note.save();
                        res.json(SavedNote)
                } catch (error) {
                        console.error(error.message);
                        res.status(500).send("Some Error Occured");
                }
        })
// ROUTE 3: Update an existing Note using: PUT "/api/notes/updatenote". Login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
        const { title, description, tag } = req.body;
        try {
            // Create a newNote object
            const newNote = {};
            if (title) { newNote.title = title };
            if (description) { newNote.description = description };
            if (tag) { newNote.tag = tag };
    
            // Find the note to be updated and update it
            let note = await Notes.findById(req.params.id);
            if (!note) { return res.status(404).send("Not Found") }
    
            if (note.user.toString() !== req.user.id) {
                return res.status(401).send("Not Allowed");
            }
            note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
            res.json({ note });
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })
    
module.exports = router