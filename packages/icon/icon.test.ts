import { within, screen } from '@testing-library/dom'
//@ts-ignore
import { Icon, tagName } from './icon'

describe('Icon', () => {

  it('Renders Icon', () => {
    let element: any = document.createElement(tagName)
    document.body.appendChild(element)

    const { getByTestId } = within(element.shadowRoot)
    screen.debug()
    element = getByTestId('Icon')
    expect(element).toBeTruthy
  })
})
