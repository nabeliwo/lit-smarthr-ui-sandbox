import { LitElement, css, html } from 'lit'
import { property } from 'lit/decorators.js'

export class AccordionPanelItem extends LitElement {
  @property({ type: Boolean, reflect: true })
  public open = false

  @property({ type: String, reflect: true })
  public label = ''

  render() {
    return html`
      <div class="wrapper ${this.open ? 'open' : ''}">
        <button class="trigger" @click=${this.onClick}>${this.label}</button>

        <div class="content ${this.open ? 'open' : ''}">
          <slot></slot>
        </div>
      </div>
    `
  }

  private onClick() {
    this.toggle()
  }

  private toggle() {
    this.open = !this.open
  }

  static get styles() {
    return css`
      .wrapper {
        position: relative;
        border-top: 1px solid #d6d3d0;
      }
      :host(:first-of-type) .wrapper {
        border-top: none;
      }
      .wrapper::before {
        position: absolute;
        top: 16px;
        left: 16px;
        display: block;
        border-style: solid;
        border-width: 4px 0 4px 5px;
        border-color: transparent transparent transparent #23221f;
        content: '';
      }
      .wrapper.open::before {
        transform: rotate(90deg);
      }
      .trigger {
        width: 100%;
        padding: 12px 16px 12px 37px;
        border: none;
        background-color: #fff;
        text-align: left;
        box-sizing: border-box;
        cursor: pointer;
      }
      .trigger:hover {
        background-color: #f2f2f2;
      }
      .content {
        display: none;
        padding: 16px;
        background-color: #f8f7f6;
      }
      .content.open {
        display: block;
      }
    `
  }
}
