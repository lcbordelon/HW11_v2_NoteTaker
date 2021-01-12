const notesData = require("../db/db.json");

console.log("NOTES:", notesData);

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(notesData);
  });

  app.post("/api/notes", function (req, res) {
    notesData.push(req.body);
  });
};
