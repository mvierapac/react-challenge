import "./ColorSelector.css";

export const ColorSelector = ({ colors, selected, onSelect }) => {
  return (
    <div className="color-selector">
      <div className="color-options">
        {colors.map((color) => (
          <button
            key={color.hexCode}
            className={`color-swatch ${
              selected?.hexCode === color.hexCode ? "selected" : ""
            }`}
            onClick={() => onSelect(color)}
            aria-label={`Select color ${color.name}`}
            type="button"
          >
            <span
              className="color-swatch__fill"
              style={{ backgroundColor: color.hexCode }}
            ></span>
          </button>
        ))}
      </div>
      {selected && <p className="color-name">{selected.name}</p>}
    </div>
  );
};
