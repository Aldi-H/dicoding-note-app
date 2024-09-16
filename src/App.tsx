import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import NoteItem from "./components/NoteItem";

import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="max-w-screen-xl m-auto">
      <Modal isOpen={isModalOpen} onClose={handleToggleModal} />
      <Header onOpenModal={handleToggleModal} />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 grid-flow-row gap-4 ">
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
      </div>
    </div>
  );
}

export default App;
