import { FiPlusCircle } from "react-icons/fi";
import SearchBar from "./SearchBar";

interface HeaderProps {
  onOpenModal: () => void;
}

const Header = ({ onOpenModal }: HeaderProps) => {
  return (
    <div className=" flex items-center justify-between py-4 mb-8">
      <h1 className="text-2xl font-bold text-center">Personal Notes</h1>
      <SearchBar />
      <button
        onClick={onOpenModal}
        className="border-2 border-black p-2 flex gap-2 font-semibold text-sm rounded-md"
      >
        <FiPlusCircle size="1.3em" />
        Add Notes
      </button>
    </div>
  );
};

export default Header;
