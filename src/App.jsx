import React, { useState } from 'react'

import TodoListTitle from './components/todos/TodoListTitle'
import TodoForm from './components/todos/TodoForm'
import TodoList from './components/todos/TodoList'

export default function App() {
  return (
    <>
      <TodoForm />
      <TodoListTitle />
      <TodoList />
    </>
  )
}
