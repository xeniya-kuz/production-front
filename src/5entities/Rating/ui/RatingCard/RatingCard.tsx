import { DATA_TEST_ID } from '@/6shared/const/tests'
import { classNames, type Mods } from '@/6shared/lib/classNames/classNames'
import { ButtonTheme } from '@/6shared/ui/deprecated/Button'
import { Drawer } from '@/6shared/ui/redesigned/Drawer'
import { Modal } from '@/6shared/ui/redesigned/Modal/Modal'
import { HStack, VStack } from '@/6shared/ui/redesigned/Stack'
import { type JSX, memo, useCallback, useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { useTranslation } from 'react-i18next'
import { Button, Card, Input, StarRating, Text } from './helpers'
import styles from './RatingCard.module.scss'

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
            console.log('acceptHandle')
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
        // setIsModalOpen(false)
        // onCancel?.(starsCount)
    }, [])

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

    const mods: Mods = {
        [styles.full]: fullWidth,
    }

    return (
        <Card
            className={classNames(className, [], mods)}
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
