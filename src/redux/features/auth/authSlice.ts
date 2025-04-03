import { createSlice } from "@reduxjs/toolkit";

type TAuthSTate = {
  user: null | object;
  token: null | string;
};

const initialState: TAuthSTate = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});
