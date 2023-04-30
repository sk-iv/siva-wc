export abstract class SvElement extends HTMLElement {
  //@ts-ignore
  #dom: any;
  //@ts-ignore
  #host: any;

  constructor(template, sheet) {
    super();
    this.attachShadow({ mode: 'open', delegatesFocus: true });

    (this.shadowRoot as ShadowRoot).innerHTML = template.render();

    (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [sheet];
    this.#dom = template.mapDOM(this.shadowRoot);
  }
}