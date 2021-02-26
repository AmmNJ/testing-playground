import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  it('renders title and text', () => {
    render(<Card title="Foo" text="Bar" />)
    // getBy... -> element must exist
    // findBy... -> async (waits for element)
    // queryBy... -> returns null, if element doesn't exist (use it to test if something is missing)
    expect(screen.getByText(/foo/i)).toBeInTheDocument()
    expect(screen.getByText(/Bar/i)).toBeInTheDocument()
  })
})
