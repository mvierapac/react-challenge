import { useQuery } from "@tanstack/react-query";
import { getPhoneById } from "@/services/phones";

export const usePhoneDetailQuery = (id) => {
  return useQuery({
    queryKey: ["phone", id],
    enabled: !!id,
    queryFn: async () => {
      const data = await getPhoneById(id);
      return {
        ...data,
        specs: {
          brand: data.brand,
          name: data.name,
          description: data.description,
          ...data.specs,
        },
      };
    },
  });
};
