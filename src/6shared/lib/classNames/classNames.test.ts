import { classNames } from './classNames'
// import { classNames } from './classNames'

describe('classNames', () => {
  test('with only main class', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  test('with additional', () => {
    const expected = 'someClass addClass1 addClass2'
    expect(classNames('someClass', ['addClass1', 'addClass2'])).toBe(expected)
  })

  test('with mods true and additional', () => {
    const expected = 'someClass addClass1 addClass2 hovered scrollabal'
    expect(classNames('someClass', ['addClass1', 'addClass2'], { hovered: true, scrollabal: true })).toBe(expected)
  })

  test('with one mod false and additional', () => {
    const expected = 'someClass addClass1 addClass2 scrollabal'
    expect(classNames('someClass', ['addClass1', 'addClass2'], { hovered: false, scrollabal: true })).toBe(expected)
  })

  test('with mods only', () => {
    const expected = 'someClass hovered'
    expect(classNames('someClass', [], { hovered: true })).toBe(expected)
  })

  test('without main class', () => {
    const expected = ' class1 hovered'
    expect(classNames('', ['class1'], { hovered: true })).toBe(expected)
  })
})
