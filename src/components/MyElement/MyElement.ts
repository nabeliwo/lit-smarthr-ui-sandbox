import { LitElement, html } from 'lit'

export class MyElement extends LitElement {
  version

  static get properties() {
    return {
      version: {},
    }
  }

  constructor() {
    super()
    this.version = 'STARTING'
  }

  render() {
    return html`
      <p>Welcome to the Lit tutorial!</p>
      <p>This is the ${this.version} code.</p>
    `
  }
}
