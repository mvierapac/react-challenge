import { useEffect, useState } from "react";

export const usePhoneOptions = (phone) => {
  const [selectedColorOption, setSelectedColorOption] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);

  useEffect(() => {
    if (phone) {
      setSelectedColorOption(phone.colorOptions?.[0]);
    }
  }, [phone]);

  const canAdd = !!(selectedColorOption && selectedStorage);

  return {
    selectedColorOption,
    setSelectedColorOption,
    selectedStorage,
    setSelectedStorage,
    canAdd,
  };
};
