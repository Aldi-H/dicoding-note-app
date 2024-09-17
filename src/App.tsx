import { useState } from "react";

import { initialData } from "./lib/NotesData";

import Header from "./components/Header";
import Modal from "./components/Modal";
import NoteLists from "./components/NoteLists";

import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="m-auto max-w-screen-xl">
      <Modal isOpen={isModalOpen} onClose={handleToggleModal} />
      <Header onOpenModal={handleToggleModal} />
      <div>
        <NoteLists
          notes={initialData.filter((note) => !note.archived)}
          noteSection="Catatan Aktif"
        />
        <NoteLists
          notes={initialData.filter((note) => note.archived)}
          noteSection="Arsip"
        />
      </div>
    </div>
  );
}

export default App;
