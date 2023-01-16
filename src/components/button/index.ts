// import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

export function buttonEl() {
  class Button extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });
      var style = document.createElement("style");
      style.textContent = `
          .default {
            background: #9CBBE9;
            width: 90%;
            height: 45px;
            color: black;
        }
        
        .outlined {
            background: transparent;
            border: 2px solid;
            width: 90%;
            height: 45px;
            color: black;
          }
          `;
      shadow.appendChild(style);

      const type = this.getAttribute("type");
      var button = document.createElement("button");

      if (type == "default") {
        button.classList.add("default");
        button.textContent = this.textContent;
      }
      if (type == "outlined") {
        button.classList.add("outlined");
        button.textContent = this.textContent;
      }

      shadow.appendChild(button);
    }
  }
  customElements.define("custom-button", Button);
}
