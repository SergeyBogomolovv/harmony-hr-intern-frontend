import client from "@/shared/config/apollo";
import { REFRESH_TOKEN_KEY } from "@/shared/constants";
import { ProfileDocument } from "@/shared/graphql/graphql";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  name: string;
  avatar: string;
};

type UserState = {
  accessToken: string | null;
  authenticated: boolean;
  user: User | null;
  login: (accessToken: string) => Promise<void>;
  logout: () => void;
  updateUser: (user: User) => void;
};

const useUser = create<UserState>()(
  persist(
    (set) => ({
      accessToken: null,
      authenticated: false,
      user: null,
      login: async (accessToken: string) => {
        set({ accessToken });
        const data = await client.query({ query: ProfileDocument });
        if (data.data.myProfile) {
          set({ authenticated: true, user: data.data.myProfile });
        }
      },
      logout: () => {
        localStorage.removeItem(REFRESH_TOKEN_KEY);
        set({ accessToken: null, authenticated: false, user: null });
      },
      updateUser: (user: User) => set({ user }),
    }),
    {
      name: "user-storage",
      partialize: (state) => ({
        accessToken: state.accessToken,
        authenticated: state.authenticated,
        user: state.user,
      }),
    },
  ),
);

export default useUser;
