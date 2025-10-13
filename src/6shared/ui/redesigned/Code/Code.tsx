import CopyIcon from '@/6shared/assets/icons/copy.svg'
import { classNames } from '@/6shared/lib/classNames/classNames'
import { type JSX, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Icon, type IconVariant } from '../Icon'
import styles from './Code.module.scss'

interface CodeProps {
    className?: string
    code: string
    variant?: IconVariant
}

export const Code = memo(function Code({
    className,
    code,
    variant = 'primary',
}: CodeProps): JSX.Element {
    const { t } = useTranslation('buttons')

    // TODO: вывести какой-то попап, что текст скопирован
    const onCopy = useCallback(() => {
        void navigator.clipboard.writeText(code)
    }, [code])

    return (
        <pre className={classNames(styles.code, [className])}>
            <Icon
                Svg={CopyIcon}
                variant={variant}
                clickable
                onClick={onCopy}
                title={t('copy')}
                buttonClassName={styles.copyBtn}
            />

            <code>{code}</code>
        </pre>
    )
})
