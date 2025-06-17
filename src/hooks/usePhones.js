import { useState, useEffect } from "react";
import { getPhones } from "@services/phones.js";

export const usePhones = (search) => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(false);

  const removeDuplicatesById = (phones) => {
    const seen = new Set();
    return phones.filter((phone) => {
      if (seen.has(phone.id)) return false;
      seen.add(phone.id);
      return true;
    });
  };

  useEffect(() => {
    const getPhonesList = async () => {
      setLoading(true);
      const data = await getPhones(search);
      const phonesList = removeDuplicatesById(data);
      setPhones(phonesList);
      setLoading(false);
    };
    getPhonesList();
  }, [search]);

  return {
    phones,
    loading,
  };
};
