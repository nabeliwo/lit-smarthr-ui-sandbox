import { LitElement, html } from 'lit'

export class MoreExpressions extends LitElement {
  value = 'Hello there.'
  checked = false

  static get properties() {
    return {
      value: {},
      checked: {},
    }
  }

  render() {
    return html`
      <div>
        <input type="text" .value=${this.value} @input=${this.changeValue} ?disabled=${!this.checked} />
      </div>
      <label><input type="checkbox" @change=${this.setChecked} /> Enable editing</label>
      <button @click=${this.handleClick}>click</button>
    `
  }

  changeValue(event: Event) {
    const input = event.target as HTMLInputElement
    this.value = input.value
  }

  setChecked(event: Event) {
    this.checked = (event.target as HTMLInputElement).checked
  }

  handleClick() {
    console.log(this.value)
  }
}
