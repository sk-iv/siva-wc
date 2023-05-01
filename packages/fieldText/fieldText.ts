import conf from '../global.config'
export const tagName = `${conf.wcPrefix}-field-text` as const;
import { SvElement } from '../SvElement'
import Template from './template';
//@ts-ignore
import styles from './styles.css';
const sheet = new CSSStyleSheet();
sheet.replaceSync(styles);

export class FieldText extends SvElement {

  handlerInput: (input: InputEvent) => void;

  constructor() {
    super(Template, sheet);

    this.handlerInput = () => { };
    this.dom.slotAddonBefore.onslotchange = this.onSlotAddonBeforeChange;
    this.dom.slotAddonAfter.onslotchange = this.onSlotAddonAfterChange;
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
    this.validate()
  }

  onSlotAddonBeforeChange = () => {
    let nodes = this.dom.slotAddonBefore.assignedElements();
    if (nodes[0].nodeName.includes('BUTTON')) {
      const minusBtn = nodes[0].shadowRoot.querySelector('button')
      minusBtn.onclick = this.onStepDown      
    }
  }

  onSlotAddonAfterChange = () => {
    let nodes = this.dom.slotAddonAfter.assignedElements();
    if (nodes[0].nodeName.includes('BUTTON')) {
      const minusBtn = nodes[0].shadowRoot.querySelector('button')
      minusBtn.onclick = this.onStepUp      
    }
  } 

  onStepDown = () => {
    this.dom.control.stepDown()
    this.validate()
  }

  onStepUp = () => {
    this.dom.control.stepUp()
    this.validate()
  }

  validate = () => {
    const isValid = this.dom.control.checkValidity();
    this.dom.control.setAttribute('aria-invalid', !isValid)
    if (!isValid) {
      this.dom.root.classList.add('invalid')
    } else {
      this.dom.root.classList.remove('invalid')
    }
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