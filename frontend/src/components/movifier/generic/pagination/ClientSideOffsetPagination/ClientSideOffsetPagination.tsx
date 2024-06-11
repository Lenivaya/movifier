import { Dispatch, SetStateAction } from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { ChevronsLeft, ChevronsRight } from 'lucide-react'

export interface IClientSideOffsetPagination {
  currentPage: number
  pageSize: number
  totalCount: number
}

export interface IClientSideOffsetPaginationResult {
  startIndex: number
  endIndex: number
}

type ClientSideOffsetPaginationProps = {
  maxVisiblePages?: number
  pageSize?: number
}
const PAGE_SIZE = 5

export function ClientSideOffsetPagination({
  pagination,
  paginationResult,
  setPaginationResult,
  setPagination,
  maxVisiblePages = 5,
  pageSize = PAGE_SIZE,
  alwaysShowPagination = true
}: {
  pagination: IClientSideOffsetPagination
  setPagination: Dispatch<SetStateAction<IClientSideOffsetPagination>>

  paginationResult: IClientSideOffsetPaginationResult
  setPaginationResult: (
    paginationResult: IClientSideOffsetPaginationResult
  ) => void
  alwaysShowPagination?: boolean
} & ClientSideOffsetPaginationProps) {
  const totalPages = Math.ceil(pagination.totalCount / pageSize)
  const isPaginationNeeded = totalPages > 1 || alwaysShowPagination

  // if (!isPaginationNeeded) return null

  const handlePaginationChange = (newCurrentPage: number) => {
    if (newCurrentPage < 1 || newCurrentPage > totalPages) return
    setPagination((prev) => ({ ...prev, currentPage: newCurrentPage }))
    setPaginationResult({
      ...paginationResult,
      startIndex: (newCurrentPage - 1) * pageSize,
      endIndex: Math.min(newCurrentPage * pageSize, pagination.totalCount)
    })
  }

  const generatePaginationButtons = () => {
    const hasExtraPages = totalPages > maxVisiblePages

    let firstVisiblePage = Math.max(
      1,
      Math.min(
        hasExtraPages && pagination.currentPage > maxVisiblePages - 2
          ? pagination.currentPage - 1
          : 1,
        totalPages - maxVisiblePages + 1
      )
    )
    const buttonsCount = Math.min(
      hasExtraPages ? maxVisiblePages + 1 : totalPages,
      totalPages - firstVisiblePage + 1
    )

    return Array.from({ length: buttonsCount }, (_, pageIndex) => {
      const pageNumber = firstVisiblePage + pageIndex

      const isThreeDotsButton =
        hasExtraPages && pageNumber === firstVisiblePage + maxVisiblePages

      return (
        <PaginationItem
          key={pageIndex}
          onClick={() => handlePaginationChange(pageNumber)}
        >
          {isThreeDotsButton ? (
            <PaginationEllipsis />
          ) : (
            <PaginationLink isActive={pageNumber === pagination.currentPage}>
              {pageNumber}
            </PaginationLink>
          )}
        </PaginationItem>
      )
    })
  }

  const firstPage = () => handlePaginationChange(1)
  const lastPage = () => handlePaginationChange(totalPages)

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink>
            <ChevronsLeft onClick={firstPage} />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => handlePaginationChange(pagination.currentPage - 1)}
          />
        </PaginationItem>

        {generatePaginationButtons()}

        <PaginationItem>
          <PaginationNext
            onClick={() => handlePaginationChange(pagination.currentPage + 1)}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>
            <ChevronsRight onClick={lastPage} />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
