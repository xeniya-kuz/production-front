import { type JSX, memo } from 'react'
import Img from '../../../assets/images/no-image.png'

interface NoImageProps {
    className?: string
    objectFit?: 'cover' | 'contain' | 'fill'
}

export const NoImage = memo(function NoImage({
    className,
    objectFit,
}: NoImageProps): JSX.Element {
    return (
        <img
            src={Img}
            className={className}
            style={{ objectFit }}
        />
    )
})
