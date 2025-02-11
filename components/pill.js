const template = document.createElement("template");
template.innerHTML = /* html */ `
  <style>
    span {
      background-color: var(--clr-yellow);
      padding: calc(var(--spacing-xs) / 2) var(--spacing-xs);
      border-radius: calc(var(--spacing-sm) / 4);
    }
  </style>
  <span>
    <slot></slot>
  </span>
`;

class PillComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("pill-c", PillComponent);
