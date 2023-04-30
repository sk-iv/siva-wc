import conf from '../global.config'
export const tagName = `${conf.wcPrefix}-button` as const;
import Template from './template';
//@ts-ignore
import styles from './styles.css';

const sheet = new CSSStyleSheet();
sheet.replaceSync(styles);

export class Button extends HTMLElement {
  emphasis: 'primary' | 'secondary' | 'tertiary'
  color: 'accent' | 'supporting' | 'main'
  size: 's' | 'm' | 'l'
  dom: any;
  host: any;

  constructor() {
    super();
    this.attachShadow({ mode: 'open', delegatesFocus: true });
    (this.shadowRoot as ShadowRoot).innerHTML = Template.render();
    //@ts-ignore
    this.shadowRoot.adoptedStyleSheets = [sheet];
    this.dom = Template.mapDOM(this.shadowRoot);

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