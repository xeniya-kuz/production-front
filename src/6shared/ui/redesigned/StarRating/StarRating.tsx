import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './StarRating.module.scss'
import { type JSX, memo, useState } from 'react'
import { Icon } from '../Icon'
import StarNotFilledIcon from '../../../assets/icons/starNotFilled.svg'
import StarFilledIcon from '../../../assets/icons/starFilled.svg'
import { DATA_TEST_ID } from '@/6shared/const/tests'
import { HStack } from '../Stack'

export interface StarRatingProps {
    className?: string
    onSelect: (starNumber: number) => void
    selectedStars?: number
    size?: number
}

const stars = [1, 2, 3, 4, 5]

export const StarRating = memo(function StarRating({
    className,
    onSelect,
    selectedStars = 0,
    size = 30,
}: StarRatingProps): JSX.Element {
    const [isSelected, setIsSelected] = useState(!!selectedStars)
    const [currentStarNumber, setCurrentStarNumber] = useState(selectedStars)

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
        console.log('onClick')
        if (!isSelected) {
            setCurrentStarNumber(starNumber)
            setIsSelected(!!starNumber)
            onSelect(starNumber)
        }
    }

    return (
        <HStack className={classNames(styles.starRating, [className])}>
            {stars.map((star) => (
                <Icon
                    key={star}
                    Svg={
                        isSelected || star <= currentStarNumber
                            ? StarFilledIcon
                            : StarNotFilledIcon
                    }
                    className={classNames(styles.starIcon, [], {
                        [styles.isHover]: star <= currentStarNumber,
                        [styles.isSelected]: isSelected,
                    })}
                    width={size}
                    height={size}
                    onMouseEnter={onHover(star)}
                    onMouseLeave={onLeave}
                    clickable
                    onClick={onClick(star)}
                    data-testid={DATA_TEST_ID.starRating + star}
                    data-selected={star <= currentStarNumber}
                    title=""
                />
            ))}
        </HStack>
    )
})
