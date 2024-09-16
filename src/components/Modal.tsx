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
      className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
    >
      <div
        onClick={handleModalContentClick}
        className="relative w-full max-w-2xl p-4 bg-white rounded-lg shadow"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b rounded-t">
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
            className="block w-full py-2 px-4 my-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary-500"
          />
          <textarea
            rows={5}
            placeholder="Write your notes here..."
            className="block w-full py-2 px-4 my-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary-500"
          />
        </div>
        {/* End of Modal Body */}

        {/* Modal Footer */}
        <div className="flex justify-end px-4 mb-4">
          <button className="bg-black/90 hover:bg-black/85 text-white p-2 pr-3 flex gap-2 font-semibold text-sm rounded-md">
            <FiPlus size="1.3em" /> Add Note
          </button>
        </div>
        {/* End of Modal Footer */}
      </div>
    </div>
  );
};

export default Modal;
