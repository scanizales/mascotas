import { configureStore } from "@reduxjs/toolkit";

import catReducer from "./slices/catSlice";

const store = configureStore({
  reducer: {
    cat: catReducer,
  },
});

export default store;