import {
    profileActions,
    selectProfileData,
    selectProfileReadonly,
    updateProfileData,
} from '@/entities/Profile'
import { selectUserAuthData } from '@/entities/User'
import EditIcon from '@/shared/assets/icons/pencil.svg'
import SaveIcon from '@/shared/assets/icons/done.svg'
import CancelIcon from '@/shared/assets/icons/cross.svg'
import { DATA_TEST_ID } from '@/shared/const/tests'
import { ToggleFeatures } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks'
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button'
import { Icon, type IconProps } from '@/shared/ui/redesigned/Icon'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { type ReactNode, useCallback, type JSX } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

interface ProfilePageHeaderProps {
    className?: string
}

export const EditProfileButton = ({
    className,
}: ProfilePageHeaderProps): JSX.Element => {
    const dispatch = useAppDispatch()
    const { t } = useTranslation('buttons')
    const readonly = useSelector(selectProfileReadonly)
    const user = useSelector(selectUserAuthData)
    const profile = useSelector(selectProfileData)
    const isAuthor = user?.id === profile?.id

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancel = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        void dispatch(updateProfileData())
    }, [dispatch])

    const Tag = ({
        theme,
        onClick,
        title,
        Svg,
        variant,
        children,
        'data-testid': dataTestid,
    }: {
        theme: ButtonTheme
        onClick: () => void
        title: string
        Svg: IconProps['Svg']
        variant?: IconProps['variant']
        children: ReactNode
        'data-testid': string
    }): JSX.Element => {
        const iconProps = { onClick, title, Svg, variant }
        const buttonProps = { theme, onClick, children }
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Icon
                        clickable
                        data-testid={dataTestid}
                        {...iconProps}
                    />
                }
                off={
                    <ButtonDeprecated
                        data-testid={dataTestid}
                        {...buttonProps}
                    />
                }
            />
        )
    }

    return (
        <HStack
            justify="between"
            className={className}
        >
            {isAuthor && (
                <>
                    {readonly ? (
                        <Tag
                            theme={ButtonTheme.OUTLINE}
                            onClick={onEdit}
                            data-testid={
                                DATA_TEST_ID.editableProfileCardHeaderEditBtn
                            }
                            title={t('edit')}
                            Svg={EditIcon}
                        >
                            {t('edit')}
                        </Tag>
                    ) : (
                        <HStack gap="8">
                            <Tag
                                theme={ButtonTheme.OUTLINE}
                                onClick={onSave}
                                data-testid={
                                    DATA_TEST_ID.editableProfileCardHeaderSaveBtn
                                }
                                title={t('save')}
                                Svg={SaveIcon}
                                variant="success"
                            >
                                {t('save')}
                            </Tag>
                            <Tag
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={onCancel}
                                data-testid={
                                    DATA_TEST_ID.editableProfileCardHeaderCancelBtn
                                }
                                title={t('cancel')}
                                Svg={CancelIcon}
                                variant="error"
                            >
                                {t('cancel')}
                            </Tag>
                        </HStack>
                    )}
                </>
            )}
        </HStack>
    )
}
