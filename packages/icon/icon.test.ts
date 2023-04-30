import { describe, it, beforeEach, expect } from 'vitest'
import { screen } from '@testing-library/dom'
import { fixture } from "@open-wc/testing-helpers";
//@ts-ignore
import { Icon, tagName } from './icon'

describe('Icon', () => {
  beforeEach(async () => {
    await fixture(`<${tagName} name="heart" data-testid="icon"></${tagName}>`);
  });

  it('Icon', () => {
    const element = screen.getByTestId("icon")
    expect(element).toBeTruthy
    const shadowDom = element.shadowRoot?.querySelector('svg')
    if (shadowDom) {
      screen.debug(shadowDom)
    }
  })
})
