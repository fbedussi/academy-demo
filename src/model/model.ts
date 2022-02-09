import { Action, ThunkAction } from '@reduxjs/toolkit'

export type FilterType = boolean | null

export type PlpSlice = {
  searchTerm: string
  filterType: FilterType
}

export type StoreModel = {
  plp: PlpSlice
}

export type AppThunk = ThunkAction<void, StoreModel, unknown, Action<string>>
