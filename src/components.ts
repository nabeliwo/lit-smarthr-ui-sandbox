import { MyElement } from './components/MyElement'
import { NameTag } from './components/NameTag'
import { MoreExpressions } from './components/MoreExpressions'
import { ToDoList } from './components/ToDoList'

import { Button } from './components/smarthr-ui/Button'
import { AccordionPanel } from './components/smarthr-ui/AccordionPanel'

customElements.define('my-element', MyElement)
customElements.define('name-tag', NameTag)
customElements.define('more-expressions', MoreExpressions)
customElements.define('todo-list', ToDoList)
customElements.define('smarthr-ui-button', Button)
customElements.define('accordion-panel', AccordionPanel)
