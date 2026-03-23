import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <>
      {todos
        .map((todo) => {
          return (
            <TodoItem
              key={todo._id}
              todo={todo}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
            />
          );
        })
        .reduce((acc, cur) => [...acc, <hr />, cur], [])}
    </>
  );
};

export default TodoList;
