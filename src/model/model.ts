import { Product } from './Product'

export type FilterType = boolean | null

export type StoreModel = {
  searchTerm: string
  filterType: FilterType
  data: Product[]
}
