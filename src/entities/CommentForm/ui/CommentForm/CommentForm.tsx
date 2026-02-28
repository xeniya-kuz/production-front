import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './CommentForm.module.scss'
import { type FC, type JSX, memo, useCallback } from 'react'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { Input as InputRedesigned } from '@/shared/ui/redesigned/Input'
import { useTranslation } from 'react-i18next'
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button'
import SendIcon from '@/shared/assets/icons/send.svg'
import {
    DynamicModuleLoader,
    type ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
    commentFormActions,
    commentFormReducer,
} from '../../model/slice/commentFormSlice'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/shared/lib/hooks'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { selectAddArticleCommentFormText } from '../../model/selectors/selectAddCommentFormText/selectAddCommentFormText'
import { DATA_TEST_ID } from '@/shared/const/tests'
import { ToggleFeatures } from '@/shared/lib/features'
import { Icon } from '@/shared/ui/redesigned/Icon'

interface AddArticleCommentFormProps {
    className?: string
    onSend: (comment: string) => void
}

const initialReducer: ReducerList = {
    commentForm: commentFormReducer,
}

const CommentForm = memo(function ArticleComments({
    className,
    onSend,
}: AddArticleCommentFormProps): JSX.Element {
    const dispatch = useAppDispatch()
    const { t } = useTranslation('comments')
    const value = useSelector(selectAddArticleCommentFormText)

    const onChange = useCallback(
        ({ name, value }: { name: string; value: string }) => {
            dispatch(commentFormActions.setComment(value))
        },
        [dispatch],
    )

    const onSendHandler = useCallback(() => {
        onSend(value ?? '')
        onChange({ name: '', value: '' })
    }, [onChange, onSend, value])

    const Deprecated: FC = () => (
        <HStack
            max
            justify="between"
            className={classNames(styles.commentForm, [className])}
            data-testid={DATA_TEST_ID.commentForm}
        >
            <InputDeprecated
                placeholder={t('input-comment')}
                value={value}
                onChange={onChange}
                className={styles.input}
                data-testid={DATA_TEST_ID.commentFormInput}
            />
            <ButtonDeprecated
                onClick={onSendHandler}
                data-testid={DATA_TEST_ID.commentFormBtn}
            >
                {t('buttons:send')}
            </ButtonDeprecated>
        </HStack>
    )

    const Redesigned: FC = () => (
        <HStack
            max
            justify="between"
            className={classNames(styles.commentFormRedesigned, [className])}
            data-testid={DATA_TEST_ID.commentForm}
            gap="32"
        >
            <InputRedesigned
                placeholder={t('input-comment')}
                value={value}
                onChange={onChange}
                data-testid={DATA_TEST_ID.commentFormInput}
            />
            <Icon
                clickable
                onClick={onSendHandler}
                Svg={SendIcon}
                title={t('submit-comment')}
                data-testid={DATA_TEST_ID.commentFormBtn}
            ></Icon>
        </HStack>
    )

    return (
        <DynamicModuleLoader reducers={initialReducer}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<Redesigned />}
                off={<Deprecated />}
            />
        </DynamicModuleLoader>
    )
})

export default CommentForm
