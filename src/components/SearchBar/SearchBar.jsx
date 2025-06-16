import { useState } from "react";
import clearIcon from "@assets/clear_icon.svg";
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
  const handleOnClear = () => {
    const newInputValue = "";
    setInputValue(newInputValue);
    onSearch(newInputValue);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-bar__input-wrapper">
        <input
          type="text"
          value={inputValue}
          onChange={handleOnChange}
          placeholder="Search for a smartphone..."
        />
        {inputValue && (
          <button
            type="button"
            className="search-bar__clear"
            onClick={handleOnClear}
            aria-label="Clear search"
          >
            <img src={clearIcon} alt="Clear" />
          </button>
        )}
      </div>
    </form>
  );
};
