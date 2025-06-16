import { useParams } from "react-router-dom";
import { usePhoneDetail } from "@/hooks/usePhoneDetail";
import { PhoneOptions } from "@/components/PhoneDetails/PhoneInfo/PhoneOptions";
import { PhoneSpecs } from "@/components/PhoneDetails/PhoneSpecs/PhoneSpecs";
import { SimilarPhones } from "@/components/PhoneDetails/SimilarPhones/SimilarPhones";
import "./PhoneDetail.css";

export const PhoneDetail = () => {
  const { id } = useParams();
  const { phone, loading, error } = usePhoneDetail(id);

  const similarPhones = phone ? phone.similarProducts : [];

  if (!phone) return <p>Cargando...</p>;

  return (
    <div className="phone-detail">
      <PhoneOptions phone={phone} />

      <PhoneSpecs specs={phone.specs} />
      <SimilarPhones phones={similarPhones} />
    </div>
  );
};
