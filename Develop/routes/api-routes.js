const notesData = require("../data/notes.js");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(notesData);
  });
};
