import { create } from "zustand";
import { axiosInstance } from "../../lib/axios.js";

export const useAuthStore = create((set) => ({
  authUser: null,
  isLoggingIng: false,
  isSigningUp: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = axiosInstance.get("/auth/check");
      set({ authUser: res.data });
    } catch (error) {
      console.log("Auth check failed:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
}));
