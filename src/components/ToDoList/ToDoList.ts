import { LitElement, css, html } from 'lit'
import { property, query } from 'lit/decorators.js'

type ToDoItem = {
  text: string
  completed: boolean
}

export class ToDoList extends LitElement {
  @property()
  listItems = [
    { text: 'Start Lit tutorial', completed: true },
    { text: 'Make to-do list', completed: false },
  ]

  @query('#newitem')
  input!: HTMLInputElement

  static get styles() {
    return css`
      .completed {
        text-decoration-line: line-through;
        color: #777;
      }
    `
  }

  render() {
    return html`
      <h2>To Do</h2>
      <ul>
        ${this.listItems.map(
          (item) =>
            html`<li class=${item.completed ? 'completed' : ''} @click=${() => this.toggleCompleted(item)}>${item.text}</li>`,
        )}
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

  toggleCompleted(item: ToDoItem) {
    item.completed = !item.completed
    this.requestUpdate()
  }
}
