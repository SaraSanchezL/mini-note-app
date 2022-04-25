
const getNotesFromApi = () => {
  console.log('Se están pidiendo las notas de la app');
  return fetch(`http://localhost:4000/notes`, { method: "GET" })
    .then(response => response.json())
    .then(data => {
      return data;
    });
};

const saveNotesApi = (data) => {
  console.log("Se están enviando datos:", data);
  return fetch(
    "http://localhost:4000/save-note", {
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
    "http://localhost:4000/delete-note", {
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
