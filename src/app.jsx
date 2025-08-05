import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import { useCounter } from './hooks/useCounter';
import TodoList from './components/todolist';

function CounterA() {
  const { count, increment,decrement } = useCounter();
  return (
    <div>
      Counter A: {count}
      <p></p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

function CounterB() {
  const { count, increment } = useCounter();
  return (
    <div>
      Counter B: {count}
      <p></p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export function App() {
  return (
    <>
      {/* <CounterA />
      <br /><br />
      <CounterB /> */}
      <TodoList />
    </>
  )
}
