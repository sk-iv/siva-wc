export default {

  getNode(node, children) {
    return new DOMParser().parseFromString(this.mapFragments(children)[node], 'text/xml').firstChild
  },

  mapDOM(scope) {
    return {
      root: scope?.getElementById('root'),
      control: scope?.getElementById('control'),
      slotAddonBefore: scope?.querySelector('slot[name="addon-before"]'),
      slotAddonAfter: scope?.querySelector('slot[name="addon-after"]'),
    }
  },

  mapFragments(children) {
    return {
      label: `<label for="control">${children}</label>`,
    }
  },

  html() {
    return `
    <div id="root">
    <div id="input-text">
      <div id="addon-before">
        <slot name="addon-before"></slot>
      </div>
      <input type="text" id="control" />
      <div id="addon-after">
        <slot name="addon-after"></slot>
      </div>
    </div>
    </div>
    `;
  },
}
