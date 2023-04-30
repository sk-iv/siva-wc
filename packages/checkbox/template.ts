export default {
  render() {
    return `${this.html()}`;
  },

  mapDOM(scope) {
    return {
      root: scope?.getElementById('root'),
      control: scope?.querySelector('input[type="checkbox"]'),
      presentation: scope?.getElementById('presentation'),
    }
  },

  html() {
    return `
    <span id="root">
    <input type="checkbox" />
    <svg id="presentation" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
      <path id="shell" d="M19,22H5c-1.7,0-3-1.3-3-3V5c0-1.7,1.3-3,3-3h14c1.7,0,3,1.3,3,3v14C22,20.7,20.7,22,19,22z M5,4C4.4,4,4,4.4,4,5v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1V5c0-0.6-0.4-1-1-1H5z"></path>
      <path id="power-indicator" d="M10.1,18.3L4.6,14l1.2-1.6l3.8,3l7.2-10.3l1.6,1.1L10.1,18.3z"></path>
    </svg>
    <slot name="label"></slot>
    </span>
    `;
  },
}