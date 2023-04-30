import { Checkbox, tagName } from './checkbox'

export { Checkbox }
//@ts-ignore
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Checkbox;
    }
  }
}