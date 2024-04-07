import React, { useState } from 'react'
import { actions } from '../../store/todos/todosStore'
import withRenderCount from '../HOCs/withRenderCount'

export function TodoForm() {
  const [text, setText] = useState('')
  console.count('TodoForm rendered')

  const addTodo = () => {
    actions.addTodo(text)
    setText('')
  }

  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
    </>
  )
}

export default withRenderCount(TodoForm);
