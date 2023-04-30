import conf from '../global.config'
export const tagName = `${conf.wcPrefix}-button` as const;
import { SvElement } from '../SvElement'
import Template from './template';
//@ts-ignore
import styles from './styles.css';

const sheet = new CSSStyleSheet();
sheet.replaceSync(styles);

export class Button extends SvElement {
  emphasis: 'primary' | 'secondary' | 'tertiary'
  color: 'accent' | 'supporting' | 'main'
  size: 's' | 'm' | 'l'

  constructor() {
    super(Template, sheet);

    this.emphasis = 'primary'
    this.color = 'main'
    this.size = 'm'
  }

  connectedCallback() {
    const attrs = this.getAttributeNames().reduce((acc, name) => {
      return { ...acc, [name]: this.getAttribute(name) };
    }, {
      emphasis: this.emphasis,
      color: this.color,
      size: this.size
    });

    this.render(attrs);
  }

  render({ ...attrs }) {
    Object.entries(attrs).map(([key, val]) => {
      return this.dom.root?.setAttribute(key, val)
    })
  }
}

window.customElements.define(tagName, Button);