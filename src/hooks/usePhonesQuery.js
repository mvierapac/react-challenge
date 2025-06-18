import { useQuery } from "@tanstack/react-query";
import { getPhones } from "@/services/phones";

const removeDuplicatesById = (phones) => {
  const seen = new Set();
  return phones.filter((phone) => {
    if (seen.has(phone.id)) return false;
    seen.add(phone.id);
    return true;
  });
};

export const usePhonesQuery = (search) => {
  return useQuery({
    queryKey: ["phones", search],
    queryFn: () => getPhones(search),
    select: removeDuplicatesById,
    placeholderData: (prev) => prev,
  });
};
