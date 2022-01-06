import { FilterType } from '../model/model'
import { Product } from '../model/Product'

type LoadDataAction = { type: 'LOAD_DATA', data: Product[] };
export const loadData = (data: Product[]): LoadDataAction => ({
  type: 'LOAD_DATA',
  data,
});

type SetSearchTermAction = { type: 'SET_SEARCH_TERM', searchTerm: string };
export const setSearchTerm = (searchTerm: string): SetSearchTermAction => ({
  type: 'SET_SEARCH_TERM',
  searchTerm,
});

type SetFilterTypeAction = { type: 'SET_FILTER_TYPE', filterType: FilterType };
export const setFilterType = (filterType: FilterType): SetFilterTypeAction => ({
  type: 'SET_FILTER_TYPE',
  filterType,
});

export type Action = SetSearchTermAction | SetFilterTypeAction | LoadDataAction;
