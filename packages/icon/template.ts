export default {
  render() {
    return `${this.html()}`;
  },

  mapDOM(scope) {
    return {
      edge: scope?.getElementById('edge'),
      fill: scope?.getElementById('fill'),
      fillAccent: scope?.getElementById('fillAccent'),
      fillPrimary: scope?.getElementById('fillPrimary'),
      fillSecondary: scope?.getElementById('fillSecondary'),
      fillShadow: scope?.getElementById('fillShadow'),
      outline: scope?.getElementById('outline'),
      root: scope?.getElementById('root'),
    }
  },

  html() {
    return `<svg
    id="root"
    viewBox="0 0 24 24"
    height="24"
    aria-hidden="true"
    focusable="false"
  >
    <path id="fillPrimary" fill="var(--icon-text-color, #ece2df)" d="" />
    <path id="fill" fill="var(--my-element-text-color, #000)" d="" />
    <path id="fillSecondary" fill="var(--icon-text-color, #e9c6b4)" d=""></path>
    <path id="fillShadow" fill="var(--icon-shadow-color, #9f899d)" d=""></path>
    <path id="fillAccent" fill="var(--icon-text-color, #820377)" d=""></path>
    <path id="edge" fill="none" stroke-dasharray="4 2" d=""></path>
    <path
      id="outline"
      fill="none"
      d=""
      vector-effect="non-scaling-stroke"
    />
  </svg>`;
  },
}
