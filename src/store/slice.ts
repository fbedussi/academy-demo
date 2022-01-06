import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FilterType, PlpSlice } from '../model/model'
import { Product } from '../model/Product'

const initialState: PlpSlice = {
  searchTerm: '',
  filterType: null,
  data: [],
}

export const slice = createSlice({
  name: 'plp',
  initialState,
  reducers: {
    _loadData(state, { payload }: PayloadAction<Product[]>) {
      state.data = payload
    },
    setSearchTerm(state, { payload }: PayloadAction<string>) {
      state.searchTerm = payload
    },
    setFilterType(state, { payload }: PayloadAction<FilterType>) {
      state.filterType = payload
    }
  }
})

export default slice.reducer
