import { classNames } from '6shared/lib/classNames/classNames'
import styles from './PageLoader.module.scss'
import { Loader } from '6shared/ui/Loader/Loader'

interface PageLoaderProps {
  className?: string
}

export const PageLoader = ({ className }: PageLoaderProps): JSX.Element => {
  return (
      <div className={classNames(styles.pageLoader, [className])}>
          <Loader/>
      </div>
  )
}
