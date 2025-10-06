import { classNames } from '@/6shared/lib/classNames/classNames'
import { type JSX, memo, useCallback, useState } from 'react'
import { Card } from '@/6shared/ui/deprecated/Card/Card'
import { HStack, VStack } from '@/6shared/ui/deprecated/Stack'
import { Text } from '@/6shared/ui/deprecated/Text/Text'
import { StarRating } from '@/6shared/ui/deprecated/StarRating/StarRating'
import { Modal } from '@/6shared/ui/deprecated/Modal/Modal'
import { Input } from '@/6shared/ui/deprecated/Input/Input'
import {
    Button,
    ButtonSize,
    ButtonTheme,
} from '@/6shared/ui/deprecated/Button/Button'
import { useTranslation } from 'react-i18next'
import { BrowserView, MobileView } from 'react-device-detect'
import { Drawer } from '@/6shared/ui/deprecated/Drawer'
import styles from './RatingCard.module.scss'
import { DATA_TEST_ID } from '@/6shared/const/tests'

interface RatingCardProps {
    className?: string
    title?: string
    feedbackTitle?: string
    hasFeedback?: boolean
    onCancel?: (starsCount: number) => void
    onAccept?: (starsCount: number, feedback?: string) => void
    rate?: number
    fullWidth?: boolean
}

export const RatingCard = memo(function RatingCard({
    className,
    onAccept,
    feedbackTitle,
    hasFeedback = true,
    onCancel,
    title,
    rate = 0,
    fullWidth = false,
}: RatingCardProps): JSX.Element {
    const { t } = useTranslation('buttons')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [starsCount, setStarsCount] = useState(rate)
    const [feedback, setFeedback] = useState('')

    const onSelectStarsHandle = useCallback(
        (starNumber: number) => {
            setStarsCount(starNumber)
            if (hasFeedback) {
                setIsModalOpen(true)
            } else {
                onAccept?.(starNumber)
            }
        },
        [hasFeedback, onAccept],
    )

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false)
        onAccept?.(starsCount, feedback)
    }, [feedback, onAccept, starsCount])

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false)
        onCancel?.(starsCount)
    }, [onCancel, starsCount])

    const onChangeHandle = ({
        name,
        value,
    }: {
        name: string
        value: string
    }): void => {
        setFeedback(value)
    }

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                placeholder="Ваш отзыв"
                value={feedback}
                onChange={onChangeHandle}
                data-testid={DATA_TEST_ID.ratingCardText}
            />
        </>
    )

    return (
        <Card
            className={classNames(className, [], { [styles.full]: fullWidth })}
            data-testid={DATA_TEST_ID.ratingCard}
        >
            <VStack
                align="center"
                gap="8"
            >
                <Text title={starsCount ? 'Спасибо за оценку!' : title} />
                <StarRating
                    size={40}
                    onSelect={onSelectStarsHandle}
                    selectedStars={starsCount}
                />
            </VStack>
            <BrowserView>
                <Modal
                    isOpen={isModalOpen}
                    onClose={cancelHandle}
                    lazy
                >
                    <VStack
                        max
                        gap="32"
                    >
                        {modalContent}
                        <HStack
                            max
                            gap="16"
                            justify="end"
                        >
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={cancelHandle}
                                data-testid={DATA_TEST_ID.ratingCardClose}
                            >
                                {t('cancel')}
                            </Button>
                            <Button
                                onClick={acceptHandle}
                                data-testid={DATA_TEST_ID.ratingCardSend}
                            >
                                {t('send')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer
                    isOpen={isModalOpen}
                    onClose={cancelHandle}
                    data-testid={DATA_TEST_ID.ratingCardClose}
                >
                    <VStack
                        max
                        gap="4"
                        justify="center"
                    >
                        {modalContent}
                        <Button
                            onClick={acceptHandle}
                            size={ButtonSize.L}
                            fullWidth
                            data-testid={DATA_TEST_ID.ratingCardSend}
                        >
                            {t('send')}
                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    )
})
