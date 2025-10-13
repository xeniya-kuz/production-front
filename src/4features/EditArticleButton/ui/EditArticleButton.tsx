import { useNavigate } from 'react-router-dom'
import {
    type FC,
    type JSX,
    memo,
    type PropsWithChildren,
    useCallback,
} from 'react'
import { useSelector } from 'react-redux'
import {
    selectArticleDetails,
    selectIsArticleAuthor,
} from '@/5entities/Article'
import { getRouteArticleEdit } from '@/6shared/const/router'
import { Button as ButtonRedesigned } from '@/6shared/ui/redesigned/Button'
import { useTranslation } from 'react-i18next'
import { ToggleFeatures } from '@/6shared/lib/features'
import { Button as ButtonDeprecated } from '@/6shared/ui/deprecated/Button'

export const EditArticleButton = memo(
    function EditArticleButton(): JSX.Element {
        const { t } = useTranslation('buttons')
        const navigate = useNavigate()
        const isAuthor = useSelector(selectIsArticleAuthor)
        const article = useSelector(selectArticleDetails)

        const onEditArticle = useCallback(() => {
            if (article) {
                navigate(getRouteArticleEdit(article?.id))
            }
        }, [navigate, article])

        if (!isAuthor) {
            return <></>
        }

        const Button: FC<PropsWithChildren & { onClick: () => void }> = ({
            children,
            ...props
        }) => (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <ButtonRedesigned
                        {...props}
                        variant="outline"
                    >
                        {children}
                    </ButtonRedesigned>
                }
                off={<ButtonDeprecated {...props}>{children}</ButtonDeprecated>}
            />
        )

        return <Button onClick={onEditArticle}>{t('edit')}</Button>
    },
)
