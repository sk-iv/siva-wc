import { Icon, tagName } from './icon'
//@ts-ignore
import glyphs from './glyphs/24/icons24.json'
//@ts-ignore
import glyphsRich from './glyphs/96/icons96.json'

export { Icon, glyphs, glyphsRich }
//@ts-ignore
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Icon;
    }
  }
}
