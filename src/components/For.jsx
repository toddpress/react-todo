import withRenderCount from './HOCs/withRenderCount'

/**
 * `For` is a React component that iterates over a list of items and applies a child function to each item.
 * If the list of items is empty or null, it renders a fallback component.
 *
 * @component
 * @param {Object} props - The properties that define the component's behavior.
 * @param {Array} props.in - The list of items to iterate over.
 * @param {Function} props.children - The function to apply to each item in the list.
 * @param {ReactNode} [props.fallback=null] - The component to render if the list of items is empty or null.
 * @returns {ReactNode} A fragment containing the results of applying the child function to each item in the list, or the fallback component if the list is empty or null.
 */
export const For = ({ in: items, children, fallback = null }) =>
  items && items.length
    ? <>{items.map(children)}</>
    : fallback;

export default withRenderCount(For)
