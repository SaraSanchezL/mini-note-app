const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");
// const users = require("./data/users.json");

// create and config server
const server = express();
server.use(cors());
server.use(express.json());
server.set("view engine", "ejs");

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});
//servidor de estáticos para las imágenes y estilos
// const staticServerPathImg = "./src/public-movies-images/";
// server.use(express.static(staticServerPathImg));
// const staticServerPathStyles = "./src/public-css";
// server.use(express.static(staticServerPathStyles));

// Database
const db = new Database("./src/db/database.db", { verbose: console.log });

//Endpoints
server.get("/notes", (req, res) => {
  let notes = [];
  const query = db.prepare(
    "SELECT * FROM notes"
  );
  notes = query.all();
  const response = {
    success: true,
    notes: notes,
  };
  res.json(response);
});

server.post("/save-note", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  const query = db.prepare(
    "INSERT INTO notes (title, description) VALUES (?,?)"
  );
  const newNote = query.run(title, description);
  res.json({
    success: true,
    newNote: newNote.lastInsertRowid,
  });

});

server.delete("/delete-note", (req, res) => {
  const query = db.prepare("DELETE FROM notes WHERE id = ?");
  const result = query.run(req.headers.id);
  console.log(result);
  res.json(result);
});


//Static Server
const staticServerPath = "./src/public-react";
server.use(express.static(staticServerPath));
