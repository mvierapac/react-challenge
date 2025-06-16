import "./StorageSelector.css";

export const StorageSelector = ({ options, selected, onSelect }) => {
  return (
    <div className="storage-selector">
      {options.map(({ capacity }) => (
        <button
          key={capacity}
          className={`storage-option ${
            selected?.capacity === capacity ? "selected" : ""
          }`}
          onClick={() => onSelect({ capacity })}
          type="button"
        >
          {capacity}
        </button>
      ))}
    </div>
  );
};
