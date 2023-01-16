export function headerEl() {
  class Header extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });
      var style = document.createElement("style");
      style.textContent = `
      .header {
        background-color: red;
        height: 60px;

        display: flex;
        justify-content: center;
        align-items: center;


        color: black;
        font-size: 35px;
      }
      `;
      shadow.appendChild(style);

      var header = document.createElement("header");
      header.classList.add("header");
      header.textContent = "header";
      shadow.appendChild(header);
    }
  }
  customElements.define("custom-header", Header);
}
