type Template = {
  mapDOM: (scope: ShadowRoot) => Record<string, any>;
  html: () => string;
}
export abstract class SvElement extends HTMLElement {
  protected dom: Record<string, any>;
  private static render(template) {
    return `${template.html()}`;
  }
  shadowRoot!: ShadowRoot;

  constructor(template: Template, sheet) {
    super();
    this.attachShadow({ mode: 'open', delegatesFocus: true });

    this.shadowRoot.innerHTML = SvElement.render(template);

    this.shadowRoot.adoptedStyleSheets = [sheet];
    this.dom = template.mapDOM(this.shadowRoot);
  }
}