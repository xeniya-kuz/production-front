import { classNames } from '6shared/lib/classNames/classNames'
import styles from './AddCommentForm.module.scss'
import { memo, useCallback } from 'react'
import { Input } from '6shared/ui/Input/Input'
import { useTranslation } from 'react-i18next'
import { Button } from '6shared/ui/Button/Button'
import { DynamicModuleLoader, type ReducerList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice'
import { useSelector } from 'react-redux'
import { selectAddCommentFormText } from '../../model/selectors/selectAddCommentFormText/selectAddCommentFormText'
import { selectAddCommentFormError } from '../../model/selectors/selectAddCommentFormError/selectAddCommentFormError'
import { useAppDispatch } from '6shared/lib/hooks'
import { HStack } from '6shared/ui/Stack'

interface AddCommentFormProps {
  className?: string
  onSend: (comment: string) => void
}

const initialReducer: ReducerList = {
  addCommentForm: addCommentFormReducer
}

const AddCommentForm = memo(function AddCommentForm
({ className, onSend }: AddCommentFormProps): JSX.Element {
  const dispatch = useAppDispatch()
  const { t } = useTranslation('comments')
  const value = useSelector(selectAddCommentFormText)
  const error = useSelector(selectAddCommentFormError)

  const onChange = useCallback(({ name, value }: { name: string, value: string }) => {
    dispatch(addCommentFormActions.setComment(value))
  }, [dispatch])

  const onSendHandler = useCallback(() => {
    onSend(value ?? '')
    onChange({ name: '', value: '' })
  }, [onChange, onSend, value])

  return (
      <DynamicModuleLoader reducers={initialReducer}>
          <HStack max justify='between' className={classNames(styles.addCommentForm, [className])}>
              <Input placeholder={t('input-comment')} value={value} onChange={onChange} className={styles.input}/>
              <Button onClick={onSendHandler}>{t('buttons:send')}</Button>
          </HStack>
      </DynamicModuleLoader>
  )
})

export default AddCommentForm
