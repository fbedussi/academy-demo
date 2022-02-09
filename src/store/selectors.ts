import { StoreModel } from '../model/model'

export const selectSearchTerm = (state: StoreModel) => state.plp.searchTerm;

export const selectFilterType = (state: StoreModel) => state.plp.filterType;
