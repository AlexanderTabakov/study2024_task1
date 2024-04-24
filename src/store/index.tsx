import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";

export interface IState {
  data: [];
  posts: [];
  loading: boolean;
  hasErrors: boolean;
  getData?: any;
  getPosts?: any;
}

const initialState: IState = {
  data: [],
  posts: [],
  loading: false,
  hasErrors: false,
};

const useStore = create(
  devtools<IState>((set) => ({
    data: [],
    posts: [],
    loading: false,
    hasErrors: false,

    getData: async () => {
      set(() => ({ loading: true }));
      try {
        const response = await axios.get(
          "https://65faa5a63909a9a65b1b056e.mockapi.io/dishes",
        );

        set((state: IState) => ({
          data: (state.data = response.data),
          loading: false,
        }));
      } catch (err) {
        set(() => ({ hasErrors: true, loading: false }));
      }
    },

    getPosts: async () => {
      set(() => ({ loading: true }));
      try {
        const response = await axios.get(
          "https://6625022f04457d4aaf9d8f31.mockapi.io/posts",
        );

        set((state: IState) => ({
          data: (state.posts = response.data),
          loading: false,
        }));
      } catch (err) {
        set(() => ({ hasErrors: true, loading: false }));
      }
    },
  })),
);

useStore.getState().getData();
useStore.getState().getPosts();

export default useStore;
