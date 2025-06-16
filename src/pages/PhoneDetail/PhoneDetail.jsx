import { useParams } from "react-router-dom";
import { usePhoneDetail } from "@/hooks/usePhoneDetail";
import { PhoneOptions } from "@/components/PhoneDetails/PhoneOptions/PhoneOptions";
import { PhoneSpecs } from "@/components/PhoneDetails/PhoneSpecs/PhoneSpecs";
import { SimilarPhones } from "@/components/PhoneDetails/SimilarPhones/SimilarPhones";
import { useLoading } from "@/hooks/useLoading";
import { LoadingBar } from "@/components/LoadingBar/LoadingBar";
import "./PhoneDetail.css";

export const PhoneDetail = () => {
  const { id } = useParams();
  const { phone, loading } = usePhoneDetail(id);
  const { reveal, progress } = useLoading(loading, !!phone, { once: false });

  const similarPhones = phone ? phone.similarProducts : [];

  return (
    <>
      <LoadingBar progress={progress} reveal={reveal} />
      {reveal && phone && (
        <div className="phone-detail fade-in">
          <PhoneOptions phone={phone} />
          <PhoneSpecs specs={phone.specs} />
          <SimilarPhones phones={similarPhones} />
        </div>
      )}
    </>
  );
};
