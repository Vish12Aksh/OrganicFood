// import card from '@material-tailwind/react/theme/components/card'
import { configureStore } from '@reduxjs/toolkit' 
import cardSlice from './cardSlice'

export const store = configureStore({
  reducer: {
    card :cardSlice
  },
}) 