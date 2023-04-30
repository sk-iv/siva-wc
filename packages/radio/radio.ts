import conf from '../global.config'
export const tagName = `${conf.wcPrefix}-radio` as const;
import { SvElement } from '../SvElement'
import Template from './template';
//@ts-ignore
import styles from './styles.css';
const sheet = new CSSStyleSheet();
sheet.replaceSync(styles);

export class Radio extends SvElement {

  //https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.inputevent.html
  handlerInput: (input: InputEvent) => void;

  constructor() {
    super(Template, sheet);

    this.handlerInput = () => { };
  }

  static get observedAttributes() {
    return ['checked', 'disabled']
  }

  set oninput(handler) {
    if (typeof handler === 'function') {
      this.handlerInput = handler
    }
  }

  connectedCallback() {
    const attrs = this.getAttributeNames().reduce((acc, name) => {
      return { ...acc, [name]: this.getAttribute(name) };
    }, {});

    this.render(attrs);
    this.dom.control.oninput = this.onPointerUp;
  }

  onPointerUp = (e) => {
    const checkedElement = document.querySelector(`${tagName}[name="${e.target.name}"][checked]`);

    if (Boolean(e.target.checked)) {
      this.setAttribute('checked', '')
      checkedElement?.removeAttribute('checked')
    } else {
      this.removeAttribute('checked')
    }
    this.handlerInput(e)
  }

  attributeChangedCallback(attrName) {
    if (this.hasAttribute('checked')) {
      this.dom.root.classList.add('checked')
    } else {
      this.dom.control.checked = false
      this.dom.root.classList.remove('checked')
    }

    if (attrName === 'disabled') {
      if (this.hasAttribute('disabled')) {
        this.dom.control?.setAttribute(attrName, '')
      } else {
        this.dom.control.removeAttribute('disabled')
      }
    }
  }

  render({ ...attrs }) {
    Object.entries(attrs).map(([key, val]) => {
      let valType = val
      if ((/disabled/).test(key)) {
        valType = ''
      }

      return this.dom.control?.setAttribute(key, valType)
    })
  }
}

window.customElements.define(tagName, Radio);