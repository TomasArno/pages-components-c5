export function labelEl() {
  class Label extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });
      var style = document.createElement("style");
      style.textContent = `
      .root {
        display: flex;
        flex-direction: column;
      }

      .label {
        font-size: 20px;
      }

      .input {
        margin-top:10px;
        height: 40px;
        font-size: 18px;
      }
      `;
      shadow.appendChild(style);

      var div = document.createElement("div");
      div.classList.add("root");
      const nameLabel = this.getAttribute("type");

      div.innerHTML = `
      <label class="label">${nameLabel}</label>
      <input class="input" type="text" placeholder="Ingrese su ${nameLabel}"/>
      `;

      shadow.appendChild(div);
    }
  }
  customElements.define("custom-label", Label);
}
