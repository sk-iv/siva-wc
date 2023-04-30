import conf from '../global.config'
export const tagName = `${conf.wcPrefix}-field-text` as const;
import Template from './template';
//@ts-ignore
import styles from './styles.css';
const sheet = new CSSStyleSheet();
//@ts-ignore

sheet.replaceSync(styles);

export class FieldText extends HTMLElement {

  dom: any;
  host: any;
  handlerInput: (input: InputEvent) => void;

  constructor() {
    super();
    this.attachShadow({ mode: 'open', delegatesFocus: true });

    (this.shadowRoot as ShadowRoot).innerHTML = Template.render();
    //@ts-ignore
    this.shadowRoot.adoptedStyleSheets = [sheet];
    this.dom = Template.mapDOM(this.shadowRoot);
    this.handlerInput = () => { };
  }

  static get observedAttributes() {
    return ['label', 'disabled']
  }

  set oninput(handler) {
    if (typeof handler === 'function') {
      this.handlerInput = handler
    }
  }

  connectedCallback() {
    const labelText = this.getAttribute('label')
    const labelNode = Template.getNode('label', labelText)

    this.dom.root.prepend(labelNode);
    const attrs = this.getAttributeNames().reduce((acc, name) => {
      return { ...acc, [name]: this.getAttribute(name) };
    }, {});

    this.render(attrs);
    this.dom.control.addEventListener("focus", this.onFocus);
    this.dom.control.addEventListener("blur", this.onBlur);
    this.dom.control.oninput = this.onInput;
  }

  disconnectedCallback() {
    this.dom.control.removeEventListener("focus", this.onFocus);
    this.dom.control.removeEventListener("blur", this.onBlur);
  }

  onFocus = () => {
    this.classList.add('focused')
  }

  onBlur = () => {
    this.classList.remove('focused')
  }

  onInput = (e) => {
    this.handlerInput(e)
  }

  attributeChangedCallback() {
    if (this.hasAttribute('checked')) {
      this.dom.root.classList.add('checked')
    } else {
      this.dom.control.checked = false
      this.dom.root.classList.remove('checked')
    }
    if (this.hasAttribute('disabled')) {
      this.dom.control.removeAttribute('disabled')
    }
  }

  render({ ...attrs }) {
    Object.entries(attrs).map(([key, val]) => {
      return this.dom.control?.setAttribute(key, val)
    })
  }
}

window.customElements.define(tagName, FieldText);