import { Radio, tagName } from './radio'

export { Radio }
//@ts-ignore
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Radio;
    }
  }
}
