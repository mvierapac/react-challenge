import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePhoneDetail } from "@/hooks/usePhoneDetail";
import { usePhoneOptions } from "@/hooks/usePhoneOptions";
import { PhoneImage } from "@/components/PhoneDetails/PhoneImage/PhoneImage";
import { PhoneInfo } from "@/components/PhoneDetails/PhoneInfo/PhoneInfo";
import { PhoneSpecs } from "@/components/PhoneDetails/PhoneSpecs/PhoneSpecs";
import { SimilarPhones } from "@/components/PhoneDetails/SimilarPhones/SimilarPhones";
import "./PhoneDetail.css";

export const PhoneDetail = () => {
  const { id } = useParams();
  const { phone, loading, error } = usePhoneDetail(id);
  const {
    selectedColorOption,
    setSelectedColorOption,
    selectedStorage,
    setSelectedStorage,
    canAdd,
  } = usePhoneOptions(phone);

  const similarPhones = phone ? phone.similarProducts : [];

  if (!phone || !selectedColorOption) return <p>Cargando...</p>;

  return (
    <div className="phone-detail">
      <section className="phone-header">
        <PhoneImage option={selectedColorOption} name={phone.name} />
        <PhoneInfo
          phone={phone}
          selectedStorage={selectedStorage}
          onStorageChange={setSelectedStorage}
          selectedColor={selectedColorOption}
          onColorChange={setSelectedColorOption}
          onAddToCart={() => console.log("Añadir al carrito")}
          canAdd={canAdd}
        />
      </section>

      <PhoneSpecs specs={phone.specs} />
      <SimilarPhones phones={similarPhones} />
    </div>
  );
};
