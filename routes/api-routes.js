const db = require("../db/db.json");
const app = require("express");

//function to save new note to db.json

module.exports = (app) => {
  app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    newNote.routeName = newNote.title.replace(/\s+/g, "").toLowerCase();
    console.log(newNote);

    db.push(newNote);
    res.json(newNote);
  });
};
