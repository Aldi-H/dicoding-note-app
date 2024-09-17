import { FiSearch } from "react-icons/fi";

interface SearchBarProps {
  searchQuery: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ searchQuery, handleSearch }: SearchBarProps) => {
  return (
    <div className="flex w-1/2 items-center rounded-md border p-2">
      <FiSearch className="m-1 text-gray-400" size="1em" />
      <input
        type="text"
        className="w-full bg-transparent pl-2 focus:outline-none"
        placeholder="Search Notes...."
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
