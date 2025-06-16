import { StorageSelector } from "../StorageSelector/StorageSelector";
import { ColorSelector } from "../ColorSelector/ColorSelector";
import { Button } from "@/components/Button/Button";
import "./PhoneInfo.css";
export const PhoneInfo = ({
  phone,
  selectedStorage,
  onStorageChange,
  selectedColor,
  onColorChange,
  onAddToCart,
  canAdd,
}) => {
  const { name, basePrice, storageOptions, colorOptions } = phone;

  return (
    <div className="phone-info">
      <h2 className="phone-name">{name}</h2>
      <p className="phone-price">{basePrice} EUR</p>

      <div className="option-group">
        <p className="option-title">STORAGE. HOW MUCH SPACE DO YOU NEED?</p>
        <StorageSelector
          options={storageOptions}
          selected={selectedStorage}
          onSelect={onStorageChange}
        />
      </div>

      <div className="option-group">
        <p className="option-title">COLOR. PICK YOUR FAVOURITE.</p>
        <ColorSelector
          colors={colorOptions}
          selected={selectedColor}
          onSelect={onColorChange}
        />
      </div>

      <Button disabled={!canAdd} onClick={onAddToCart}>
        {"Añadir"}
      </Button>
    </div>
  );
};
