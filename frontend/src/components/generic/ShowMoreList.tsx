import { useState } from 'react'

export const useShowMore = <T,>(items: T[], initialCount: number = 10) => {
  const [showAll, setShowAll] = useState(false)

  const visibleItems = showAll ? items : items.slice(0, initialCount)

  const toggleShowMore = () => {
    setShowAll((prev) => !prev)
  }

  return { visibleItems, showAll, toggleShowMore }
}

interface ShowMoreListProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
  renderShowMoreButton?: (
    showAll: boolean,
    toggleShowMore: () => void
  ) => React.ReactNode
  initialCount?: number
}

export const ShowMoreList = <T,>({
  items,
  renderItem,
  renderShowMoreButton,
  initialCount = 10
}: ShowMoreListProps<T>) => {
  const { visibleItems, showAll, toggleShowMore } = useShowMore(
    items,
    initialCount
  )

  const elements = visibleItems.map(renderItem)

  if (items.length > initialCount) {
    elements.push(
      renderShowMoreButton ? (
        renderShowMoreButton(showAll, toggleShowMore)
      ) : (
        <button
          key='show-more-button'
          onClick={toggleShowMore}
          className='text-blue-500 underline'
        >
          {showAll ? 'Show less' : 'Show more'}
        </button>
      )
    )
  }

  return <>{elements}</>
}
