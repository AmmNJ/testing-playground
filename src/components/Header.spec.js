import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders the children prop', () => {
    const { container } = render(<Header>Hello world</Header>)
    expect(container.firstChild).toHaveTextContent('Hello world')
  })
})
