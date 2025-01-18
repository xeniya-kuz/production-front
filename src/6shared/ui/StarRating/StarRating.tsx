import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './StarRating.module.scss'
import { type JSX, memo, useState } from 'react'
import { Icon, IconColors } from '../Icon/Icon'
import StarIcon from '../../assets/icons/star.svg'

interface StarRatingProps {
  className?: string
  onSelect: (starNumber: number) => void
  selectedStars?: number
  size?: number
}

const stars = [1, 2, 3, 4, 5]
export const StarRating = memo(function StarRating
({ className, onSelect, selectedStars = 0, size = 30 }: StarRatingProps): JSX.Element {
  const [isSelected, setIsSelected] = useState(!!selectedStars)
  const [currentStarNumber, setCurrentStarNumber] = useState(0)

  const onHover = (starNumber: number) => () => {
    if (!isSelected) {
      setCurrentStarNumber(starNumber)
    }
  }

  const onLeave = (): void => {
    if (!isSelected) {
      setCurrentStarNumber(0)
    }
  }

  const onClick = (starNumber: number) => () => {
    if (!isSelected) {
      setCurrentStarNumber(starNumber)
      setIsSelected(!!starNumber)
      onSelect(starNumber)
    }
  }

  return (
      <div className={classNames(styles.starrating, [className])}>
          {stars.map(star => (
              <Icon
                  key={star}
                  color={IconColors.PRIMARY_STROKE}
                  Svg={StarIcon}
                  className={classNames(styles.starIcon, [], {
                    [styles.isHover]: star <= currentStarNumber,
                    [styles.isSelected]: isSelected
                  })}
                  width={size}
                  height={size}
                  onMouseEnter={onHover(star)}
                  onMouseLeave={onLeave}
                  onClick={onClick(star)}
              />
          ))}
      </div>
  )
})
