import { clsx } from 'clsx'
import { Dispatch, FC, SetStateAction } from 'react'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronsLeft,
  ChevronsRight
} from 'lucide-react'
import { PaginationNavButton } from '@/components/tracking-service/generic/pagination/OffsetPagination/PaginationNavButton'
import { IOffsetPagination } from '@/components/tracking-service/generic/pagination/OffsetPagination/IOffsetPagination'
import { cn } from '@/lib'

export interface IOffsetPaginationProps {
  totalCount: number
  maxVisiblePages?: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  pagination: IOffsetPagination
  setPagination: Dispatch<SetStateAction<IOffsetPagination>>
  alwaysShowPagination?: boolean
}

export const OffsetPagination: FC<IOffsetPaginationProps> = ({
  pagination,
  setPagination,
  hasNextPage,
  hasPreviousPage,
  totalCount,
  maxVisiblePages = 5,
  alwaysShowPagination = false
}) => {
  const totalPages = Math.ceil(totalCount / pagination.pageSize)

  const isPaginationNeeded = totalPages > 1 || alwaysShowPagination

  const handlePaginationChange = (newCurrentPage: number) => {
    if (newCurrentPage < 1 || newCurrentPage > totalPages) return
    setPagination({
      ...pagination,
      currentPage: newCurrentPage,
      offset: (newCurrentPage - 1) * pagination.pageSize
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
        <button
          key={pageIndex}
          disabled={isThreeDotsButton}
          className={cn(
            'min-w-[5em] max-w-[10em] rounded-xl bg-black/30 p-5 shadow-md hover:bg-white hover:text-black dark:bg-neutral-800 dark:hover:bg-neutral-500',
            {
              '!bg-black text-white hover:text-white':
                pageNumber === pagination.currentPage
            }
          )}
          onClick={() => handlePaginationChange(pageNumber)}
        >
          {isThreeDotsButton ? '...' : pageNumber}
        </button>
      )
    })
  }

  const firstPage = () => handlePaginationChange(1)
  const lastPage = () => handlePaginationChange(totalPages)

  return (
    <div
      hidden={!isPaginationNeeded}
      className={clsx(
        'flex w-full flex-row justify-center border-t-2 border-gray-800 p-5',
        { hidden: !isPaginationNeeded }
      )}
    >
      <div className='flex flex-row gap-7'>
        <PaginationNavButton
          onClick={firstPage}
          icon={<ChevronsLeft className='mx-auto w-5' />}
          isActive={hasPreviousPage}
        />
        <PaginationNavButton
          onClick={() => handlePaginationChange(pagination.currentPage - 1)}
          icon={<ArrowLeftIcon className='mx-auto w-5' />}
          isActive={hasPreviousPage}
        />
      </div>

      <div className='ml-6 mr-6 flex flex-row gap-1'>
        {generatePaginationButtons()}
      </div>

      <div className='flex flex-row gap-7'>
        <PaginationNavButton
          onClick={() => handlePaginationChange(pagination.currentPage + 1)}
          icon={<ArrowRightIcon className='mx-auto w-5' />}
          isActive={hasNextPage && pagination.currentPage < totalPages}
        />
        <PaginationNavButton
          onClick={lastPage}
          icon={<ChevronsRight className='mx-auto w-5' />}
          isActive={hasNextPage}
        />
      </div>
    </div>
  )
}
