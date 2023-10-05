import React from "react";
import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const AddNote = ({ addNote, contacts }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      const newContact = {
        id: contacts,
        title,
        body,
        createdAt: new Date(),
        archived: false,
      };
      addNote(newContact);
      setTitle("");
      setBody("");
    }
  };
  return (
    <div>
      <h2 className="font-semibold text-lg">Add Note</h2>
      <form onSubmit={handleSubmit} className="px-2 py-2 flex flex-col w-72">
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}></Input>
        <Input
          type="text"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}></Input>
        <Button type="submit" className="bg-emerald-400 text-white p-1 w-1/2">
          Add
        </Button>
      </form>
    </div>
  );
};

export default AddNote;
