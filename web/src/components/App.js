import React, { useEffect, useState } from 'react';
import apiNotes from '../services/api-notes';
import "../stylesheets/app.scss"

const App = () => {
  const [notes, setNotes] = useState([]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
  const [refresh, setRefresh] = useState(getRandomNumber(100));

  useEffect(() => {
    apiNotes.getNotesFromApi().then(response => {
      setNotes(response.notes);
    });
  }, []);

  useEffect(() => {
    apiNotes.getNotesFromApi().then(response => {
      setNotes(response.notes);
    });
  }, [refresh]);

  const handleTitle = ev => {
    setTitle(ev.target.value);
  };

  const handleDescription = ev => {
    setDescription(ev.target.value);
  };

  const saveDataNotesApi = data => {
    apiNotes.saveNotesApi(data).then(response => {
      console.log('Add note');
      setNotes([...notes, data]);
    });
  };
  const handleForm = ev => {
    ev.preventDefault();
    saveDataNotesApi({
      id: notes.length + 1,
      title: title,
      description: description
    });
    setRefresh(getRandomNumber(100))
    setTitle('');
    setDescription('');
  };

  const handleClickDelete = (ev) => {
    const idBtn = parseInt(ev.currentTarget.id);
    const noteId = notes.find((note => note.id === idBtn));
    if (noteId.id === idBtn) {
      apiNotes.deleteNoteApi(idBtn).then(response => {
        console.log('Delete note');
      })
      setRefresh(getRandomNumber(100))
    }
  }

  const renderAppNotes = () => {
    return notes.map(note => {
      return (
        <li key={note.id} className="note" id={note.id}>
          <h2 className="titleNote">{note.title}</h2>
          <p className="noteDefinition">{note.description}</p>
          <button onClick={handleClickDelete} id={note.id}>X</button>
        </li>
      );
    });


  }


  // render
  return (
    <>

      <header className="header">
        <h1 className="mainTitle">Save your notes</h1>
      </header>

      <main className="main">
        <div>
          <form action="" onSubmit={handleForm}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" onChange={handleTitle} value={title} />
            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" onChange={handleDescription} value={description} />
            <input type="submit" value="New Note" />
          </form>
        </div>

        <section>
          <ul>
            {renderAppNotes()}
          </ul>
        </section>


      </main>

      <footer>
        <p>My Notes</p>
        <p className="text">Copy Sara Sánchez</p>

      </footer>

    </>
  );
};

export default App;
