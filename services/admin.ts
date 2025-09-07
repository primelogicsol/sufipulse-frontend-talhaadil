import api from "@/lib/axios";

export const getAllVocalists = () => {
    return api.get("/admin/vocalists");
  };

  export const getAllWriters = () => {
    return api.get("/admin/writers");
  };
  
  export const getKalamsByWriter = (userId: number) => {
    return api.get(`/admin/kalams/writer/${userId}`);
  };
  
  export const getAllKalams = () => {
    return api.get("/admin/kalams");
  };
  