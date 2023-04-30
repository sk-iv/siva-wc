import { FieldText, tagName } from './fieldText'

export { FieldText }
//@ts-ignore
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: FieldText;
    }
  }
}

