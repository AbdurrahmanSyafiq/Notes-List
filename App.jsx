import { useState } from "react";
import "./App.css";
import AddNote from "./AddNote";
import NoteList from "./NoteList";
import { getInitialData } from "./InitialDate";

function App() {
  const initialData = getInitialData();
  const [contacts, setContacts] = useState([...initialData]);

  const addNote = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteNotes = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full mt-10">
      <h1 className="font-bold text-2xl mb-10">Note List</h1>
      <div className="w-full flex flex-col items-center justify-center">
        <AddNote addNote={addNote} contacts={contacts.length + 1}></AddNote>
        <h2 className="font-semibold text-lg mb-4 mt-2">Notes</h2>
        {contacts.length >= 1 ? (
          <NoteList notes={contacts} deleteNotes={deleteNotes}></NoteList>
        ) : (
          <p>No Notes available</p>
        )}
      </div>
    </div>
  );
}

export default App;
