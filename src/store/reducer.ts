import { StoreModel } from '../model/model'
import { Action } from './actions'

const defaultStore: StoreModel = {
  searchTerm: '',
  filterType: null,
  data: [],
}

const reducer = (state = defaultStore, action: Action) => {
  switch (action.type) {
    case 'LOAD_DATA':
      return {
        ...state,
        data: action.data,
      }
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.searchTerm,
      }
    case 'SET_FILTER_TYPE':
      return {
        ...state,
        filterType: action.filterType,
      }
    default:
      return state
  }
}

export default reducer
