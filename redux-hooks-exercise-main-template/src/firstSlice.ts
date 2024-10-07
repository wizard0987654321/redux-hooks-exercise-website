import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: string[] = [];

export const firstSlice = createSlice({
  name: "first",
  initialState,
  reducers: {
    inputAdded: (state, action: PayloadAction<string>) => {
        state.push(action.payload);
    },
    removeString: (state, action: PayloadAction<string>) => {
        return state.filter(str => str !== action.payload);
    },
    clearStrings: () => {
        return [];
    }
  }
});

export const { inputAdded, removeString, clearStrings } = firstSlice.actions;
export default firstSlice.reducer;