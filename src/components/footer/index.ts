export function footerEl() {
  class Footer extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });
      var style = document.createElement("style");
      style.textContent = `
        .footer {
          background-color: violet;
          height: 233px;
  
          display: flex;
          justify-content: center;
          align-items: center;
  
  
          color: black;
          font-size: 20px;
        }
        `;
      shadow.appendChild(style);

      var footer = document.createElement("footer");
      footer.classList.add("footer");
      footer.textContent = "Footer";
      shadow.appendChild(footer);
    }
  }
  customElements.define("custom-footer", Footer);
}
