import { signal } from '@preact/signals';

const todos = signal([{ text: 'Buy groceries' }, { text: 'Walk the dog' }]);

const text = signal('');

function addTodo() {
    todos.value = [...todos.value, { text: text.value }];
    text.value = ''; 
}

function removeTodo(todo) {
    todos.value = todos.value.filter(t => t !== todo);
}

export default function TodoList() {
    const handleInput = event => (text.value = event.currentTarget.value);

    return (
        <>
            <input value={text.value} onInput={handleInput} />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.value.map(todo => (
                    <li>
                        {todo.text} <button onClick={() => removeTodo(todo)}>❌</button>
                    </li>
                ))}
            </ul>
        </>
    );
}