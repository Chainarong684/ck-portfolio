import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

type Theme = 'light' | 'dark'

type ThemeMode = {
  theme: Theme
}
const initialState: ThemeMode = {
  theme: 'light'
}

export const themeSlice = createSlice({
  name: 'themeMode',
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
    },
    initialTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload
    }
  }
})

export const { toggleTheme, initialTheme } = themeSlice.actions

export const getCurrentTheme = (state: RootState) => state.themeMode.theme

export default themeSlice.reducer
