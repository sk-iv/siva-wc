import conf from '../global.config'
const glyphs = require('./glyphs/24/icons24.json')
const glyphsRich = require('./glyphs/96/icons96.json')
import Template from './template';
//@ts-ignore
import styles from './styles.css';
const sheet = new CSSStyleSheet();
//@ts-ignore
sheet.replaceSync(styles);

export const tagName = `${conf.wcPrefix}-icon` as const;

const type = {
  sm: {
    size: 18,
    viewBox: 24,
  },
  md: {
    size: 24,
    viewBox: 24,
  },
  lg: {
    size: 96,
    viewBox: 24,
  },
}

export class Icon extends HTMLElement {
  size: 'md' | 'sm' | 'lg';
  typeGlyphs: any;
  dom: any;

  static get observedAttributes() {
    return ['filled', 'aria-label']
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    (this.shadowRoot as ShadowRoot).innerHTML = Template.render();
    //@ts-ignore
    this.shadowRoot.adoptedStyleSheets = [sheet];
    this.dom = Template.mapDOM(this.shadowRoot);

    this.size = 'md'
    this.typeGlyphs = glyphs
  }

  connectedCallback() {
    const name = this.getAttribute('name') || ''
    const isRich = name?.includes('rich')
    const isFilled = this.getAttribute('filled') === 'true'

    this.render({
      name,
      isRich,
      isFilled
    });
  }

  attributeChangedCallback(attrName, _oldVal, _newVal) {
    const name = this.getAttribute('name') || ''
    const isRich = this.getAttribute('name')?.includes('rich');

    this.render({
      name,
      isRich,
      isFilled: attrName === 'filled' && _newVal === 'true'
    });
  }

  render({ name, isRich, isFilled }) {
    if (isRich) {
      this.typeGlyphs = glyphsRich
      this.size = 'lg'
      this.dom.root?.setAttribute('viewBox', `0 0 ${type.lg.size} ${type.lg.size}`)
      this.dom.root?.setAttribute('height', type.lg.size.toString())
    }

    if (isFilled && Boolean(this.typeGlyphs[name].fill)) {
      this.dom.fill?.setAttribute('d', this.typeGlyphs[name]?.fill)
    }
    if (isFilled && Boolean(this.typeGlyphs[name]?.fillPrimary)) {
      this.dom.fillPrimary?.setAttribute('d', this.typeGlyphs[name]?.fillPrimary)
    }
    if (isFilled && Boolean(this.typeGlyphs[name]?.fillSecondary)) {
      this.dom.fillSecondary?.setAttribute('d', this.typeGlyphs[name]?.fillSecondary)
    }
    if (isFilled && Boolean(this.typeGlyphs[name]?.fillShadow)) {
      this.dom.fillShadow?.setAttribute('d', this.typeGlyphs[name]?.fillShadow)
    }
    if (isFilled && Boolean(this.typeGlyphs[name]?.fillAccent)) {
      this.dom.fillAccent?.setAttribute('d', this.typeGlyphs[name]?.fillAccent)
    }
    this.dom.outline?.setAttribute('d', this.typeGlyphs[name]?.outline)
    Boolean(this.typeGlyphs[name]?.edge && this.dom.edge?.setAttribute('d', this.typeGlyphs[name].edge))
  }

}

if (!customElements.get(tagName)) {
  customElements.define(tagName, Icon);
}
