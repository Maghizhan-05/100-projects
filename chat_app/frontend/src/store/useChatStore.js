import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../../lib/axios.js";

export const useChatStore = create((set) => ({
  users: [],
  messages: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,

  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get("/message/user");
      console.log(res.data);
      set({ users: res.data.filteredUsers });
      console.log("Users set in store:", res.data);
    } catch (error) {
      //toast.error(error.response.data.messgae);
      console.error("Error fetching users:", error);
    } finally {
      set({ isUsersLoading: false });
    }
  },

  getMessages: async (userId) => {
    set({ isMessagesLoading: true });
    try {
      const res = await axiosInstance.get(`/message/${userId}`);
      set({ messages: res.data.messages });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isMessagesLoading: false });
    }
  },
  //todo: optimize this later
  setSelectedUser: (selectedUser) => set({ selectedUser }),
}));
