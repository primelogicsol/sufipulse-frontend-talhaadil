import api from "@/lib/axios";

export const getKalamsByWriter = () => {
  return api.get(`/kalams/writer/my-kalams`, {
    headers: {
      requiresAuth: true,
    },
  });
};


export const getKalamDetails = (kalamId: string) => {
  return api.get(`/kalams/${kalamId}`, {
    headers: {
      requiresAuth: true,
    },
  });
}