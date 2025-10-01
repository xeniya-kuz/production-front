import { screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { ComponentRender } from '@/6shared/lib/tests/ComponentRender'
import userEvent from '@testing-library/user-event'

describe('Sidebar', () => {
    test('render', () => {
        ComponentRender(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('toggle (collapse)', async () => {
        ComponentRender(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        await userEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
