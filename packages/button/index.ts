import { Button, tagName } from './button'

export { Button }
//@ts-ignore
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Button;
    }
  }
}
