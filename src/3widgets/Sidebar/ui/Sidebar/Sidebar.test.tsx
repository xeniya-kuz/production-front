import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { renderWithTranslation } from '6shared/lib/tests/renderWithTranslation/renderWithTranslation'

describe('Sidebar', () => {
  test('render', () => {
    renderWithTranslation(<Sidebar/>)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('toggle (collapse)', () => {
    renderWithTranslation(<Sidebar/>)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
