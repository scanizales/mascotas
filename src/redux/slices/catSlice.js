import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialCat = [];

export const catSlice = createSlice({
  name: "cat",
  initialState: initialCat,
  reducers: {
    addCat: (state, action) => {
      state.push(action.payload);
    },
    deleteCat: (state, action) => {
      return state.filter((cat) => cat.id !== action.payload);
    },
  },
});
export const selectOrigins = (state) => {
  return [...new Set(state.cat.map((cat) => cat.origin))];
};
export const selectLifeSpan = (state) => {
  return [...new Set(state.cat.map((cat) => cat.life_span))];
};
export const selectName = (state) => {
  return [...new Set(state.cat.map((cat) => cat.name))];
};
export const selectTemperament = (state) => {
  return [...new Set(state.cat.map((cat) => cat.temperament))];
};
export const selectCats = (state) => state.cat;

export const selectFilteredCats = (
  [selectCats, (_, filters) => filters], 
  (cats, filters) => {
    return cats.filter((cat) => {
      return (
        (!filters.origin || cat.origin === filters.origin) &&
        (!filters.lifeSpan || cat.life_span === filters.lifeSpan) &&
        (!filters.name || cat.name === filters.name) &&
        (!filters.temperaments?.length || filters.temperaments.every((t) => cat.temperament.includes(t)))
      );
    });
  }
);

export const { addCat, deleteCat, origins} = catSlice.actions;
export default catSlice.reducer;