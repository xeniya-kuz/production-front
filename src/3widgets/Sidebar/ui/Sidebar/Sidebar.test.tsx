import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { ComponentRender } from '6shared/lib/tests/componentRender'

describe('Sidebar', () => {
  test('render', () => {
    ComponentRender(<Sidebar/>)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('toggle (collapse)', () => {
    ComponentRender(<Sidebar/>)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
