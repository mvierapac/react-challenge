import { useState, useEffect } from "react";
import { getPhoneById } from "@/services/phones";

export const usePhoneDetail = (id) => {
  const [phone, setPhone] = useState(null);
  const [phoneError, setPhoneError] = useState(null);
  const [phoneLoading, setPhoneLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchPhone = async () => {
      setPhoneLoading(true);
      setPhoneError(null);
      try {
        const data = await getPhoneById(id);
        const mergedSpecs = {
          brand: data.brand,
          name: data.name,
          description: data.description,
          ...data.specs,
        };

        setPhone({
          ...data,
          specs: mergedSpecs,
        });
      } catch (err) {
        setPhoneError(err.message);
      } finally {
        setPhoneLoading(false);
      }
    };

    fetchPhone();
  }, [id]);

  const loading = phoneLoading;
  const error = phoneError;

  return { phone, loading, error };
};
