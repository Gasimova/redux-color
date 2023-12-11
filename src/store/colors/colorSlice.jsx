import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  colors: []
}

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    addColorBox: (state, action) => {
      state.colors.push(action.payload)
    },
    deleteColorBox: (state, action) => {
      console.log(action, 'action');
      const findBox = state.colors.find((item) => item.id === action.payload)
      if (!findBox) return
      return { ...state.colors, colors: state.colors.filter((item) => item !== findBox) }
    }
  }
})


export const {addColorBox, deleteColorBox} = colorSlice.actions
export default colorSlice.reducer