import "./PhoneImage.css";

export const PhoneImage = ({ option, name }) => {
  const img = option.imageUrl;
  const alt = `${name} ${option.name}`;

  return (
    <div className="phone-image-wrapper">
      <img src={img} alt={alt} className="phone-image" />
    </div>
  );
};
