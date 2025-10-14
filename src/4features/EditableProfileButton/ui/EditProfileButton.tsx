import {
    profileActions,
    selectProfileData,
    selectProfileReadonly,
    updateProfileData,
} from '@/5entities/Profile'
import { selectUserAuthData } from '@/5entities/User'
import EditIcon from '@/6shared/assets/icons/pencil.svg'
import SaveIcon from '@/6shared/assets/icons/done.svg'
import CancelIcon from '@/6shared/assets/icons/cross.svg'
import { DATA_TEST_ID } from '@/6shared/const/tests'
import { ToggleFeatures } from '@/6shared/lib/features'
import { useAppDispatch } from '@/6shared/lib/hooks'
import {
    Button as ButtonDeprecated,
    ButtonTheme,
    type ButtonProps as ButtonDeprecatedProps,
} from '@/6shared/ui/deprecated/Button'
import { Icon, type IconProps } from '@/6shared/ui/redesigned/Icon'
import { HStack } from '@/6shared/ui/redesigned/Stack'
import { useCallback, type JSX } from 'react'
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

    const Tag = (props: ButtonDeprecatedProps & IconProps): JSX.Element => (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<Icon {...props} />}
            off={<ButtonDeprecated {...props} />}
        />
    )

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
                            clickable
                            title="Редактировать профиль"
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
                                clickable
                                title="Сохранить"
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
                                clickable
                                title="Отменить"
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
