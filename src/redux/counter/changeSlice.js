import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: "colors",
  initialState: { colors: ["black", "black", "black"] },
  reducers: {
    setColors: (state, action) => {
      const newColors = ["black", "black", "black"];
      if (action.payload.includes("pink")) newColors[0] = "pink";
      if (action.payload.includes("gray")) newColors[1] = "gray";
      if (action.payload.includes("aqua")) newColors[2] = "aqua"; 
      state.colors = newColors
    },
  },
});

export const { setColors } = colorSlice.actions;
export default colorSlice.reducer;