import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FilterType, PlpSlice } from '../model/model'

const initialState: PlpSlice = {
  searchTerm: '',
  filterType: null,
}

const resetForNewClient = createAction('resetForNewClient')

export const slice = createSlice({
  name: 'plp',
  initialState,
  reducers: {
    setSearchTerm(state, { payload }: PayloadAction<string>) {
      state.searchTerm = payload
    },
    setFilterType(state, { payload }: PayloadAction<FilterType>) {
      state.filterType = payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(resetForNewClient, (state, action) => {
        return state
      })
  },
})

export default slice.reducer
