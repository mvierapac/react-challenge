import "./StorageSelector.css";

export const StorageSelector = ({ options, selected, onSelect }) => {
  return (
    <div className="storage-selector">
      {options.map((option) => (
        <button
          key={option.capacity}
          className={`storage-option ${
            selected?.capacity === option.capacity ? "selected" : ""
          }`}
          onClick={() => onSelect(option)}
          type="button"
        >
          {option.capacity}
        </button>
      ))}
    </div>
  );
};
