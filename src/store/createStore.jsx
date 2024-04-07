
export function createStore(initialState) {
  let state = initialState
  const listeners = new Set()

  function getState() {
    return state
  }

  function setState(newState) {
    state = {
      ...getState(),
      ...newState
    }
    listeners.forEach(listener => listener())
  }

  function subscribe(listener) {
    listeners.add(listener)
    return () => listeners.delete(listener)
  }

  return { getState, setState, subscribe }
}

