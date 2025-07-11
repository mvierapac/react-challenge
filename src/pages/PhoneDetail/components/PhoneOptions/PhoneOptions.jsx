import { StorageSelector } from "../StorageSelector/StorageSelector";
import { ColorSelector } from "../ColorSelector/ColorSelector";
import { Button } from "@/components/Button/Button";
import "./PhoneOptions.css";
import { PhoneImage } from "../PhoneImage/PhoneImage";
import { usePhoneOptions } from "@/hooks/usePhoneOptions";
import { useCartContext } from "@/context/CartContext";

export const PhoneOptions = ({ phone }) => {
  const { name, basePrice, storageOptions, colorOptions } = phone;
  const {
    selectedColorOption,
    setSelectedColorOption,
    selectedStorage,
    setSelectedStorage,
    canAdd,
  } = usePhoneOptions(phone);
  const { dispatch } = useCartContext();

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: phone.id,
        name: phone.name,
        price: selectedStorage.price,
        color: selectedColorOption.name,
        storage: selectedStorage.capacity,
        imageUrl: selectedColorOption.imageUrl,
      },
    });
  };
  if (!selectedColorOption) return <p>Cargando opciones...</p>;
  return (
    <section className="phone-header">
      <PhoneImage
        images={colorOptions}
        optionSelected={selectedColorOption}
        name={phone.name}
      />
      <div className="phone-options-container">
        <div className="phone-info">
          <h2 className="phone-name">{name}</h2>
          {!selectedStorage ? (
            <p className="phone-price">{`From ${basePrice} EUR`}</p>
          ) : (
            <p className="phone-price">{`${selectedStorage.price} EUR`}</p>
          )}

          <div className="option-group">
            <p className="option-title">STORAGE. HOW MUCH SPACE DO YOU NEED?</p>
            <StorageSelector
              options={storageOptions}
              selected={selectedStorage}
              onSelect={setSelectedStorage}
            />
          </div>

          <div className="option-group">
            <p className="option-title">COLOR. PICK YOUR FAVOURITE.</p>
            <ColorSelector
              colors={colorOptions}
              selected={selectedColorOption}
              onSelect={setSelectedColorOption}
            />
          </div>
        </div>
        <Button disabled={!canAdd} onClick={handleAddToCart} fullWidth={true}>
          {"AÑADIR"}
        </Button>
      </div>
    </section>
  );
};
