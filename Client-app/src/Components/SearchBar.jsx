import { useState } from "react";
import { FiSearch } from "react-icons/fi";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="flex items-center w-64 p-2 bg-white border border-gray-300 rounded-full transition-shadow focus-within:shadow-md">
      <FiSearch className="text-gray-600 text-xl mr-2" />
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
        className="w-full border-none outline-none text-base bg-transparent"
      />
    </div>
  );
}

export default SearchBar;