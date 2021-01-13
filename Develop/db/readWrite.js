/* <i class="fas fa-save text-light save-note"></i> */
const db = require("./db.json");
//function to save new note to db.json

app.post("/api/notes", function (req, res) {
  const newNote = req.body;
  newNote.routeName = newNote.title.replace(/\s+/g, "").toLowerCase();
  console.log(newNote);

  db.push(newNote);
  res.json(newNote);
});

// app.post('/add', function(req,res){
//     db.serialize(()=>{
//       db.run('INSERT INTO emp(id,name) VALUES(?,?)', [req.body.id, req.body.name], function(err) {
//         if (err) {
//           return console.log(err.message);
//         }
//         console.log("New employee has been added");
//         res.send("New employee has been added into the database with ID = "+req.body.id+ " and Name = "+req.body.name);
//       });
//   });
//   });
