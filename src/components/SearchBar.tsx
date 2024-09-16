import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="border flex items-center rounded-md p-2 w-1/2">
      <FiSearch className="m-1 text-gray-400" size="1em" />
      <input
        type="text"
        className="bg-transparent pl-2 w-full focus:outline-none"
        placeholder="Search Notes...."
      />
    </div>
  );
};

export default SearchBar;
