import { Option } from '@mobily/ts-belt'

export interface IOffsetPagination {
  offset: Option<number>
  pageSize: number
  currentPage: number
}
