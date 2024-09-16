import { FiX } from "react-icons/fi";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
    >
      <div className="relative w-full max-w-2xl p-4 bg-white rounded-lg shadow">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b rounded-t">
          <h3 className="text-lg font-semibold text-gray-900">Add Notes</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-300"
          >
            <FiX size="1.3em" />
          </button>
        </div>
        {/* End of Modal Header */}
      </div>
    </div>
  );
};

export default Modal;
