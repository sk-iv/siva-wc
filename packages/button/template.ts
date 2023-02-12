export default {
  render() {
    return `${this.html()}`;
  },

  mapDOM(scope) {
    return {
      root: scope?.getElementById('root'),
    }
  },

  html() {
    return `
    <svg id="svgfilters" aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <filter id="teal-white" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feColorMatrix type="matrix" values=".33 .33 .33 0 0
          .33 .33 .33 0 0
          .33 .33 .33 0 0
          0 0 0 1 0" in="SourceGraphic" result="colormatrix"/>
        <feComponentTransfer in="colormatrix" result="componentTransfer">
          <feFuncR type="table" tableValues="0.03 1"/>
          <feFuncG type="table" tableValues="0.57 1"/>
          <feFuncB type="table" tableValues="0.49 1"/>
          <feFuncA type="table" tableValues="0 1"/>
        </feComponentTransfer>
        <feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
      </filter>
    </defs>
  </svg>`
      + '<button id="root"><slot></slot></button>';
  },
}
