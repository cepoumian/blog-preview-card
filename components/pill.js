const template = document.createElement("template");

template.innerHTML = /* html */ `
  <style>
    span {
      padding: calc(var(--spacing-xs) / 2) var(--spacing-xs);
      border-radius: calc(var(--spacing-sm) / 4);
    }
  </style>
  <span>
    <slot></slot>
  </span>
`;

class PillComponent extends HTMLElement {
  static get observedAttributes() {
    return ["bg-color", "text-color"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "bg-color") {
      this.shadowRoot.querySelector("span").style.backgroundColor = newValue;
    }
    if (name === "text-color") {
      this.shadowRoot.querySelector("span").style.color = newValue;
    }
  }
}

customElements.define("pill-c", PillComponent);
