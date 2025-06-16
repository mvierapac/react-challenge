import { useState } from "react";
import "./SearchBar.css";

export const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleOnChange = (e) => {
    const newInputValue = e.target.value;
    setInputValue(newInputValue);
    onSearch(newInputValue);
  };
  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleOnChange}
        placeholder="Search for a smartphone..."
      />
    </form>
  );
};
