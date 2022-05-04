const EXPRESS_SERVER_NOTES = `https://mini-note-app.herokuapp.com/notes`;
const EXPRESS_SERVER_SAVE = `https://mini-note-app.herokuapp.com/save-note`;
const EXPRESS_SERVER_DELETE = `https://mini-note-app.herokuapp.com/delete-note`;


const getNotesFromApi = () => {
  console.log('Se están pidiendo las notas de la app');
  return fetch(EXPRESS_SERVER_NOTES, { method: "GET" })
    .then(response => response.json())
    .then(data => {
      return data;
    });
};

const saveNotesApi = (data) => {
  console.log("Se están enviando datos:", data);
  return fetch(
    EXPRESS_SERVER_SAVE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }
  )
    .then(response => response.json())
    .then(data => {
      return data;
    });
};

const deleteNoteApi = (id) => {
  return fetch(
    EXPRESS_SERVER_DELETE, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'id': id,
    },
  }
  )
    .then(response => response.json())
    .then(data => {
      return data;
    });
};


const objToExport = {
  getNotesFromApi: getNotesFromApi,
  saveNotesApi: saveNotesApi,
  deleteNoteApi: deleteNoteApi,
};

export default objToExport;
