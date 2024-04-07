import React from 'react'

import { For } from '../For'
import withRenderCount from '../HOCs/withRenderCount'

import { useTodosStore } from '../../store/todos/todosStore'

function TodoList() {
  const { state: todos, actions } = useTodosStore(state => state.todos)

  return (
    <div>
      <ul>
        <For in={todos} fallback={<li>Nothing to do 🎉</li>}>
          {(todo) => (
            <li key={todo.id}>
              <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                {todo.text}
              </span>
              <button onClick={() => actions.toggleTodo(todo.id)}>
                Mark {todo.done ? 'Incomplete' : 'Done'}
              </button>
              <button onClick={() => actions.deleteTodo(todo.id)}>Delete</button>
            </li>
          )}
        </For>
      </ul>
    </div>
  )
}

export default withRenderCount(TodoList);