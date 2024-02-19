import { classNames } from '6shared/lib/classNames/classNames'
import './Loader.scss'
import { memo } from 'react'

interface LoaderProps {
  className?: string
}

export const Loader = memo(function Loader ({ className }: LoaderProps): JSX.Element {
  return (
      <div className={classNames('lds-spinner', [className])}>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
      </div>

  )
})
