import { PhoneCard } from "@/components/PhoneCard/PhoneCard";
import "./PhonesResult.css";

const PhonesList = ({ phones }) => {
  return (
    <ul className="phones-list">
      {phones.map((phone) => (
        <PhoneCard key={phone.id} phone={phone}></PhoneCard>
      ))}
    </ul>
  );
};

const NoResults = () => {
  return <p>Sin resultados</p>;
};

export const PhonesResult = ({ phones }) => {
  const hasResults = phones?.length;
  return hasResults ? (
    <PhonesList phones={phones}></PhonesList>
  ) : (
    <NoResults></NoResults>
  );
};
