import { render } from '@testing-library/react'
import Title from '../Title'
test('renders Title component', () => {
  const { container } = render(<Title />)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div>
      <h1>
        Title Component
      </h1>
    </div>
  `)
})
