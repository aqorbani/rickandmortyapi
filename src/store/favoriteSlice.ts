import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Character = {
  id: string;
  name: string;
  image: string;
  status: string;
  species: string;
};

interface FavoriteState {
  favorites: Character[];
}

const initialState: FavoriteState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Character>) => {
      const exists = state.favorites.find((c) => c.id === action.payload.id);
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((c) => c.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
