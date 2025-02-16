import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from './Button'

describe('Button', () => {
  test('render', () => {
    render(<Button>test</Button>)
    expect(screen.getByText('test')).toBeInTheDocument()
  })

  test('className', () => {
    render(<Button className={ButtonTheme.CLEAR}>test</Button>)
    expect(screen.getByText('test')).toHaveClass('clear')
    // render компонента в тесте
    screen.debug()
  })
})
