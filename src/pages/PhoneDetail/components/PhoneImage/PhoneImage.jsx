import "./PhoneImage.css";

export const PhoneImage = ({ images, optionSelected, name }) => {
  return (
    <div className="phone-image-wrapper">
      {images.map((image) => (
        <img
          key={image.name}
          src={image.imageUrl}
          alt={`${name} ${image.name}`}
          className={`phone-image ${
            image.name === optionSelected.name ? "phone-image--selected" : ""
          }`}
        />
      ))}
    </div>
  );
};
