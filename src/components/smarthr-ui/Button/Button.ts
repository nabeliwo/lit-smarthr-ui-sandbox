import { LitElement, css, html } from 'lit'

export class Button extends LitElement {
  theme

  static get properties() {
    return {
      theme: {},
    }
  }

  constructor() {
    super()
    this.theme = 'primary'
  }

  render() {
    return html`
      <button class="button ${this.theme}">
        <slot></slot>
      </button>
    `
  }

  static get styles() {
    return css`
      .button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        padding: 0px 16px;
        border-radius: 6px;
        border: none;
        font-weight: bold;
        font-size: 14px;
        text-align: center;
        vertical-align: middle;
        text-decoration: none;
        box-sizing: border-box;
        cursor: pointer;
      }
      .button:focus {
        outline: none;
        box-shadow: #fff 0 0 0 2px, #0077c7 0 0 0 4px;
      }
      .primary {
        background-color: #0077c7;
        color: #fff;
      }
      .primary:hover {
        background-color: #0068ae;
      }
      .danger {
        background-color: #e01e5a;
        color: #fff;
      }
      .danger:hover {
        background-color: #ca1b51;
      }
    `
  }
}
