import { classNames } from '6shared/lib/classNames/classNames'
import styles from './AddCommentForm.module.scss'
import { memo, useCallback } from 'react'
import { Input } from '6shared/ui/Input/Input'
import { useTranslation } from 'react-i18next'
import { Button } from '6shared/ui/Button/Button'
import { DynamicModuleLoader, type ReducersList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice'
import { useSelector } from 'react-redux'
import { selectAddCommentFormText } from '../../model/selectors/selectAddCommentFormText/selectAddCommentFormText'
import { selectAddCommentFormError } from '../../model/selectors/selectAddCommentFormError/selectAddCommentFormError'
import { useAppDispatch } from '6shared/lib/hooks'

interface AddCommentFormProps {
  className?: string
  onSend: (comment: string) => void
}

const initialReducer: ReducersList = {
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
          <div className={classNames(styles.addCommentForm, [className])}>
              <Input placeholder={t('input-comment')} value={value} onChange={onChange} className={styles.input}/>
              <Button onClick={onSendHandler}>{t('buttons:send')}</Button>
          </div>
      </DynamicModuleLoader>
  )
})

export default AddCommentForm
