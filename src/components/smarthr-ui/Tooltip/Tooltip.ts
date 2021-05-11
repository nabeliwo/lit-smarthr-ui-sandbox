import { LitElement, css, html } from 'lit'

export class Tooltip extends LitElement {
  message

  static get properties() {
    return {
      message: {},
    }
  }

  constructor() {
    super()
    this.message = ''
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="balloon">
          <p class="balloon-text">${this.message}</p>
        </div>

        <slot></slot>
      </div>
    `
  }

  static get styles() {
    return css`
      .wrapper {
        position: relative;
        display: inline-block;
      }
      .balloon {
        position: absolute;
        left: 50%;
        bottom: calc(100% + 5px);
        display: none;
        border-radius: 4px;
        box-shadow: rgb(51 51 51 / 35%) 0 2px 8px 0;
        background-color: #23221f;
        white-space: nowrap;
        transform: translateX(-50%);
      }
      .balloon::after {
        position: absolute;
        left: 50%;
        bottom: -4px;
        display: block;
        border-style: solid;
        border-width: 5px 5px 0;
        border-color: #23221f transparent transparent;
        transform: translateX(-5px);
        content: '';
      }
      .wrapper:hover .balloon {
        display: block;
      }
      .balloon-text {
        margin: 0;
        padding: 8px 16px;
        color: #fff;
        font-size: 11px;
        line-height: 1;
      }
    `
  }
}
