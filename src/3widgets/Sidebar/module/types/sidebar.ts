import { type FunctionComponent, type SVGAttributes } from 'react'

export interface SidebarItemType {
  path: string
  text: string
  Icon: FunctionComponent<SVGAttributes<SVGElement>>
  isPrivate?: boolean
}
