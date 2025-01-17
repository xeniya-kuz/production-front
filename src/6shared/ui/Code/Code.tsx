import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './Code.module.scss'
import { type JSX, memo, useCallback } from 'react'
import { Button, ButtonTheme } from '../Button/Button'
import { Icon, IconColors } from '../Icon/Icon'
import CopyIcon from '@/6shared/assets/icons/copy-20-20.svg'
import { useTranslation } from 'react-i18next'

interface CodeProps {
  className?: string
  code: string
  color?: IconColors
}

export const Code = memo(function Code
({ className, code, color = IconColors.PRIMARY_STROKE }: CodeProps): JSX.Element {
  const { t } = useTranslation('buttons')

  const onCopy = useCallback(
    () => {
      void navigator.clipboard.writeText(code)
    },
    [code]
  )

  return (
      <pre className={classNames(styles.code, [className])}>
          <Button className={styles.copyBtn} theme={ButtonTheme.CLEAR} title={t('copy')} onClick={onCopy}>
              <Icon Svg={CopyIcon} color={color}/>
          </Button>
          <code>
              {code}
          </code>
      </pre>
  )
})
