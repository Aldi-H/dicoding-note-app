import SearchBar from "./SearchBar";
import { FiPlusCircle } from "react-icons/fi";

import Button from "./Button";

interface HeaderProps {
  onOpenModal: () => void;
  searchQuery: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header = ({ onOpenModal, searchQuery, handleSearch }: HeaderProps) => {
  return (
    <div className="mb-8 flex items-center justify-between py-4">
      <h1 className="text-center text-2xl font-bold">Personal Notes</h1>
      <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />
      <Button
        icon={<FiPlusCircle size="1.3em" />}
        buttonName="Add Notes"
        buttonAction={onOpenModal}
        className="border-2 border-black"
      />
    </div>
  );
};

export default Header;
