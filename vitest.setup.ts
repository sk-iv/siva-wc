import { vi } from 'vitest'
const CSSStyleSheetMock = vi.fn(() => ({
  replaceSync: vi.fn(),
}))

vi.stubGlobal('CSSStyleSheet', CSSStyleSheetMock)