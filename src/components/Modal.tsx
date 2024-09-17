import { MouseEvent } from "react";

import { FiPlus, FiX } from "react-icons/fi";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  const handleOutsideClick = (_e: MouseEvent<HTMLDivElement>) => {
    onClose();
  };

  const handleModalContentClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={handleOutsideClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div
        onClick={handleModalContentClick}
        className="relative w-full max-w-2xl rounded-lg bg-white p-4 shadow"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between rounded-t border-b p-4">
          <h3 className="text-lg font-semibold text-gray-900">Add New Note</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-500/80"
          >
            <FiX size="1.3em" />
          </button>
        </div>
        {/* End of Modal Header */}

        {/* Modal Body */}
        <div className="p-4">
          <input
            type="text"
            placeholder="Title"
            className="focus:ring-primary-500 my-2 block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none"
          />
          <textarea
            rows={5}
            placeholder="Write your notes here..."
            className="focus:ring-primary-500 my-2 block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none"
          />
        </div>
        {/* End of Modal Body */}

        {/* Modal Footer */}
        <div className="mb-4 flex justify-end px-4">
          <button className="flex gap-2 rounded-md bg-black/90 p-2 pr-3 text-sm font-semibold text-white hover:bg-black/85">
            <FiPlus size="1.3em" /> Add Note
          </button>
        </div>
        {/* End of Modal Footer */}
      </div>
    </div>
  );
};

export default Modal;
