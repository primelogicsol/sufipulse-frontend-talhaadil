import api from "@/lib/axios";

export const login = (email: string, password: string) => {
  return api.post("/auth/login", {
    email: email,
    password: password
  });
};

export const signin = (
  name: string,
  email: string,
  password: string,
  role: string,
  country: string,
  city: string
) => {
  return api.post("/auth/signup", {
    email: email,
    name: name,
    password: password,
    role: role,
    country: country,
    city: city
  });
};

export const verifyOtp = (email: string, otp: string) => {
  return api.post("/auth/verify-otp", {
    email: email,
    otp: otp
  });
};

export const resendOtp = (email: string) => {
  return api.post("/auth/resend-otp", {
    email: email
  });
};

export const forgotPassword = (email: string) => {
  return api.post("/auth/forgot-password", {
    email: email
  });
};

export const resetPassword = (email: string, otp: string, new_password: string) => {
  return api.post("/auth/reset-password", {
    email: email,
    otp: otp,
    new_password: new_password
  });
};


