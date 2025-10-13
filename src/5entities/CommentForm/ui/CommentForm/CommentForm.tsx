import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './CommentForm.module.scss'
import { type JSX, memo, useCallback } from 'react'
import { Input } from '@/6shared/ui/deprecated/Input'
import { useTranslation } from 'react-i18next'
import { Button } from '@/6shared/ui/deprecated/Button'
import {
    DynamicModuleLoader,
    type ReducerList,
} from '@/6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
    commentFormActions,
    commentFormReducer,
} from '../../model/slice/commentFormSlice'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/6shared/lib/hooks'
import { HStack } from '@/6shared/ui/redesigned/Stack'
import { selectAddArticleCommentFormText } from '../../model/selectors/selectAddCommentFormText/selectAddCommentFormText'
import { DATA_TEST_ID } from '@/6shared/const/tests'

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

    return (
        <DynamicModuleLoader reducers={initialReducer}>
            <HStack
                max
                justify="between"
                className={classNames(styles.commentForm, [className])}
                data-testid={DATA_TEST_ID.commentForm}
            >
                <Input
                    placeholder={t('input-comment')}
                    value={value}
                    onChange={onChange}
                    className={styles.input}
                    data-testid={DATA_TEST_ID.commentFormInput}
                />
                <Button
                    onClick={onSendHandler}
                    data-testid={DATA_TEST_ID.commentFormBtn}
                >
                    {t('buttons:send')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    )
})

export default CommentForm
