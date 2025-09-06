import api from "@/lib/axios";

export const getKalamsByWriter = () => {
  return api.get(`/kalams/writer/my-kalams`, {
    headers: {
      requiresAuth: true,
    },
  });
};
