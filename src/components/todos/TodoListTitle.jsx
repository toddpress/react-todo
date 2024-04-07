
import { useTodosStore } from '../../store/todos/todosStore'
import withRenderCount from '../HOCs/withRenderCount'

function TodoListTitle() {
  const { state: listTitle, actions } = useTodosStore(state => state.listTitle)

  return (
    <div style={{ display: 'flex' }}>
      <h6>
        {listTitle}
      </h6>
      <button onClick={() => actions.updateListTitle('My New List')}>Change Title</button>
    </div>
  )
}

export default withRenderCount(TodoListTitle);
