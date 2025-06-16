import { PhoneCard } from "@/components/PhoneCard/PhoneCard";
import "./SimilarPhones.css";

export const SimilarPhones = ({ phones }) => {
  if (!phones || phones.length === 0) return null;

  return (
    <section className="similar-phones">
      <h2 className="similar-phones__title">Similar items</h2>
      <div className="similar-phones__list">
        {phones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </div>
    </section>
  );
};
