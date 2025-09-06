import api from "@/lib/axios";

// ✅ Create Studio Visit Request
export const createStudioVisitRequest = (data: {
  vocalist_id: number;
  kalam_id: number;
  name: string;
  email: string;
  organization: string;
  contact_number: string;
  preferred_date: string; // format: YYYY-MM-DD
  preferred_time: string;
  purpose: string;
  number_of_visitors: number;
  additional_details: string;
  special_requests: string;
}) => {
  return api.post(`/requests/studio-visit-request`, data, {
    headers: {
      requiresAuth: true,
    },
  });
};

// ✅ Get Studio Visit Requests By Vocalist
export const getStudioVisitRequestsByVocalist = () => {
  return api.get(`/requests/studio-visit-requests/vocalist`, {
    headers: {
      requiresAuth: true,
    },
  });
};

// ✅ Create Remote Recording Request
export const createRemoteRecordingRequest = (data: {
  vocalist_id: number;
  kalam_id: number;
  name: string;
  email: string;
  city: string;
  country: string;
  time_zone: string;
  role: string;
  project_type: string;
  recording_equipment: string;
  internet_speed: string;
  preferred_software: string;
  availability: string;
  recording_experience: string;
  technical_setup: string;
  additional_details: string;
}) => {
  return api.post(`/requests/remote-recording-request`, data, {
    headers: {
      requiresAuth: true,
    },
  });
};

// ✅ Get Remote Recording Requests By Vocalist
export const getRemoteRecordingRequestsByVocalist = () => {
  return api.get(`/requests/remote-recording-requests/vocalist`, {
    headers: {
      requiresAuth: true,
    },
  });
};

export const checkRequestExists = (vocalist_id: string, kalam_id: string) => {
  return api.get(`/requests/check-request-exists/${vocalist_id}/${kalam_id}`, {
    headers: {
      requiresAuth: true,
    },
  });
};
