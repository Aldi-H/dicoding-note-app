import { useState } from "react";

import { nanoid } from "nanoid";
import { initialData, Note } from "./lib/NotesData";

import Header from "./components/Header";
import Modal from "./components/Modal";
import NoteLists from "./components/NoteLists";

import "./App.css";

function App() {
  const [notes, setNotes] = useState<Note[]>(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleAddNote = (newNote: { title: string; body: string }) => {
    const createdAt = new Date().toISOString();
    const note = {
      id: nanoid(),
      title: newNote.title,
      body: newNote.body,
      createdAt: createdAt,
      archived: false,
    };

    const updatedNotes = [...notes, note];
    setNotes(updatedNotes);

    console.log(updatedNotes);

    handleToggleModal();
  };

  const handleArchiveNote = (noteId: string | number) => {
    const updatedNotes = notes.map((note) =>
      note.id === noteId ? { ...note, archived: true } : note,
    );
    setNotes(updatedNotes);

    console.log(updatedNotes);
  };

  const handleUnarchiveNote = (noteId: string | number) => {
    const updatedNotes = notes.map((note) =>
      note.id === noteId ? { ...note, archived: false } : note,
    );
    setNotes(updatedNotes);

    console.log(updatedNotes);
  };

  const handleDeleteNote = (noteId: string | number) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);

    console.log(updatedNotes);
  };

  return (
    <div className="m-auto max-w-screen-xl">
      <Modal
        isOpen={isModalOpen}
        onClose={handleToggleModal}
        handleAddNote={handleAddNote}
      />
      <Header onOpenModal={handleToggleModal} />
      <div>
        <NoteLists
          notes={notes.filter((note) => !note.archived)}
          handleArchiveNote={handleArchiveNote}
          handleDeleteNote={handleDeleteNote}
          noteSection="Catatan Aktif"
        />
        <NoteLists
          notes={notes.filter((note) => note.archived)}
          handleArchiveNote={handleUnarchiveNote}
          handleDeleteNote={handleDeleteNote}
          noteSection="Arsip"
        />
      </div>
    </div>
  );
}

export default App;
