import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    location: "",
    reason: "",
    gender: "",

    date: "",
    insurance: "",

    email: "",
    phone: "",
  },
  reducers: {
    chooseLocation: (state, action) => {
      state.location = action.payload;
    },
    chooseReason: (state, action) => {
      state.reason = action.payload;
    },
    chooseGender: (state, action) => {
      state.gender = action.payload;
      state.gender2 = action.payload;
    },
    chooseDate: (state, action) => {
      state.date = action.payload;
    },
    chooseInsurance: (state, action) => {
      state.insurance = action.payload;
    },
    chooseContact: (state, action) => {
      state.email = action.payload;
      state.phone = action.payload;
    },
  },
});

export const iptsteps = rootSlice.reducer;

export const {
  chooseLocation,
  chooseReason,
  chooseGender,
  chooseDate,
  chooseInsurance,
  chooseContact,
} = rootSlice.actions;
