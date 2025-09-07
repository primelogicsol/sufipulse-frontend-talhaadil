import api from "@/lib/axios";

export const getAllVocalists = () => {
    return api.get("/admin/vocalists", {
      headers: {
        requiresAuth: true,
      },
    });
  };
  
  export const getAllWriters = () => {
    return api.get("/admin/writers", {
      headers: {
        requiresAuth: true,
      },
    });
  };
  
  export const getKalamsByWriter = (userId: number) => {
    return api.get(`/admin/kalams/writer/${userId}`, {
      headers: {
        requiresAuth: true,
      },
    });
  };
  
  export const getAllKalams = () => {
    return api.get("/admin/kalams", {
      headers: {
        requiresAuth: true,
      },
    });
  };
  