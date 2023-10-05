import React from "react";
import Button from "./Button";
import { showFormattedDate } from "./InitialDate";
const NoteList = ({ notes, deleteNotes }) => {
  const currentDate = new Date(); // Buat objek tanggal saat ini
  const formattedDate = showFormattedDate(currentDate);
  return (
    <div>
      <div className="text-sm flex flex-wrap max-w-4xl justify-center">
        {notes.map((contact) => (
          <div key={contact.id} className="mb-4 flex px-2 py-2 max-w-xs ">
            <div className="px-1.5 py-1.5 max-w-sm w-full bg-white shadow-md flex justify-between items-center">
              <div className="flex flex-col">
                <div className="ml-2 text-base font-semibold max-w-sm">
                  {contact.title}
                </div>
                <div className="ml-2 text-sm font-thin mb-4">
                  {formattedDate}
                </div>
                <div className="ml-2">{contact.body}</div>
              </div>
              <Button
                onClick={() => deleteNotes(contact.id)}
                className="px-1 py-1 bg-emerald-400 ml-4 rounded-lg font-semibold">
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteList;
