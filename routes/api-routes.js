const fs = require("fs");

module.exports = (app) => {
  //GET all notes
  app.get("/api/notes", (req, res) => {
    fs.readFile(__dirname + "/../db/db.json", "utf8", (error, text) => {
      if (error) {
        console.log(error);
      }
      res.json(JSON.parse(text));
    });
  });

  //POST new note
  app.post("/api/notes", (req, res) => {
    fs.readFile(__dirname + "/../db/db.json", "utf8", (error, text) => {
      if (error) {
        console.log(error);
      }
      text = JSON.parse(text);
      req.body.id = Date.now();
      text.push(req.body);
      fs.writeFile(
        __dirname + "/../db/db.json",
        JSON.stringify(text),
        (error) => {
          if (error) {
            console.log(error);
          }
          res.json(true);
        }
      );
    });
  });

  //DELETE note
  app.delete("/api/notes/:id", (req, res) => {
    fs.readFile(__dirname + "/../db/db.json", "utf8", (error, text) => {
      if (error) {
        console.log(error);
      }
      text = JSON.parse(text);

      const notesArray = [];
      const id = req.params.id;
      for (let i = 0; i < text.length; i++) {
        const currentNoteId = text[i].id;

        console.log(currentNoteId);

        if (currentNoteId != id) {
          notesArray.push(text[i]);
        }
      }

      let filteredNotes = JSON.stringify(notesArray);

      fs.writeFile(__dirname + "/../db/db.json", filteredNotes, (error) => {
        if (error) {
          console.log(error);
        }
        res.json(true);
      });
    });
  });
};
