import { LitElement, html } from 'lit'
import { property, query } from 'lit/decorators.js'

export class ToDoList extends LitElement {
  @property()
  listItems = [
    { text: 'Start Lit tutorial', completed: true },
    { text: 'Make to-do list', completed: false },
  ]

  @query('#newitem')
  input!: HTMLInputElement

  static get properties() {
    return {
      listItems: {},
    }
  }

  render() {
    return html`
      <h2>To Do</h2>
      <ul>
        ${this.listItems.map((item) => html`<li>${item.text}</li>`)}
      </ul>
      <input id="newitem" aria-label="New item" />
      <button @click=${this.addToDo}>Add</button>
    `
  }

  addToDo() {
    this.listItems.push({ text: this.input.value, completed: false })
    this.requestUpdate()
    this.input.value = ''
  }
}
