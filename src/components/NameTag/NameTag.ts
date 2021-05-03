import { LitElement, html } from 'lit'

export class NameTag extends LitElement {
  name

  static get properties() {
    return {
      name: {},
    }
  }

  constructor() {
    super()
    this.name = 'Your name here'
  }

  render() {
    return html`
      <p>Hello, ${this.name}</p>
      <input placeholder="Enter your name" @input=${this.changeName} />
    `
  }

  changeName(event: Event) {
    const input = event.target as HTMLInputElement
    this.name = input.value
  }
}
