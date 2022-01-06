import { StoreModel } from '../model/model'

export const selectSearchTerm = (state: StoreModel) => state.searchTerm;

export const selectFilterType = (state: StoreModel) => state.filterType;

export const selectProducts = (state: StoreModel) => state.data;
