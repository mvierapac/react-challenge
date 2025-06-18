import { useParams } from "react-router-dom";
import { usePhoneDetailQuery } from "@/hooks/usePhoneDetailQuery";
import { PhoneOptions } from "@/pages/PhoneDetail/components/PhoneOptions/PhoneOptions";
import { PhoneSpecs } from "@/pages/PhoneDetail/components/PhoneSpecs/PhoneSpecs";
import { SimilarPhones } from "@/pages/PhoneDetail/components/SimilarPhones/SimilarPhones";
import { useLoading } from "@/hooks/useLoading";
import { LoadingBar } from "@/components/LoadingBar/LoadingBar";
import { BackButton } from "@/components/BackButton/BackButton";
import { removeDuplicatesById } from "@/utils/removeDuplicatesById";
import "./PhoneDetail.css";

export const PhoneDetail = () => {
  const { id } = useParams();
  const { data: phone, isFetching } = usePhoneDetailQuery(id);
  const { progress } = useLoading(isFetching, !!phone, { once: false });

  const similarPhones = phone
    ? removeDuplicatesById(phone.similarProducts)
    : [];

  return (
    <>
      {isFetching && <LoadingBar progress={progress} />}
      {!isFetching && phone && (
        <div className="phone-detail fade-in">
          <div className="app-container">
            <BackButton />
            <PhoneOptions phone={phone} />
            <PhoneSpecs specs={phone.specs} />
          </div>
          <SimilarPhones phones={similarPhones} />
        </div>
      )}
    </>
  );
};
