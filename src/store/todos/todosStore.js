import { useSyncExternalStore } from 'use-sync-external-store/shim'
import { createStore } from '../createStore.jsx'

const initialState = {
  todos: [
    { id: 1, text: 'Learn JavaScript', done: false },
    { id: 2, text: 'Learn React', done: false },
    { id: 3, text: 'Build a React App', done: false },
  ],
  listTitle: 'My Todos',
  myOtherStoreData: 'Some other data',
}

export const actions = {
  updateListTitle: (newTitle) => {
    const currentState = store.getState();
    store.setState({
      ...currentState,
      listTitle: newTitle,
    });
  },
  addTodo: (text) => {
    const newTodo = { id: Date.now(), text, done: false }
    const current = store.getState()
    store.setState({ todos: [...current.todos, newTodo] })
  },
  toggleTodo: (id) => {
    const todos = store.getState().todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    )
    store.setState({ todos })
  },
  deleteTodo: (id) => {
    const todos = store.getState().todos.filter(todo => todo.id !== id)
    store.setState({ todos })
  },
}

export const store = createStore(initialState)

export const useTodosStore = (selector = state => state) => {

  const getSnapshot = () => selector(store.getState())
  const subscribe = (callback) => store.subscribe(callback) // Subscribe return an unsubscribe function

  const state = useSyncExternalStore(subscribe, getSnapshot)

  return {
    state,
    actions
  }
}
