import { LitElement, css, html } from 'lit'
import { property } from 'lit/decorators.js'

export class AccordionPanel extends LitElement {
  @property({ type: Boolean, reflect: true, attribute: 'allow-multiple' })
  public allowMultiple = false

  render() {
    return html`
      <div class="wrapper">
        <slot></slot>
      </div>
    `
  }

  static get styles() {
    return css`
      .wrapper {
        overflow: hidden;
        border-radius: 8px;
        box-shadow: rgb(51 51 51 / 15%) 0 0 4px 0;
        background-color: #fff;
        list-style: none;
      }
    `
  }
}
