import { render, screen, fireEvent } from "@testing-library/react";
import TodoItem from "./TodoItem";

describe("TodoItem", () => {
  const todo = {
    text: "Test todo",
    done: false,
  };

  const doneTodo = {
    text: "Done todo",
    done: true,
  };

  const mockDeleteTodo = vi.fn();
  const mockCompleteTodo = vi.fn();

  beforeEach(() => {
    mockDeleteTodo.mockClear();
    mockCompleteTodo.mockClear();
  });

  test("renders todo text", () => {
    render(
      <TodoItem
        todo={todo}
        deleteTodo={mockDeleteTodo}
        completeTodo={mockCompleteTodo}
      />,
    );
    expect(screen.getByText("Test todo")).toBeDefined();
  });

  test('renders "not done" message when todo is incomplete', () => {
    render(
      <TodoItem
        todo={todo}
        deleteTodo={mockDeleteTodo}
        completeTodo={mockCompleteTodo}
      />,
    );
    expect(screen.getByText("This todo is not done")).toBeDefined();
  });

  test('renders "done" message when todo is complete', () => {
    render(
      <TodoItem
        todo={doneTodo}
        deleteTodo={mockDeleteTodo}
        completeTodo={mockCompleteTodo}
      />,
    );
    expect(screen.getByText("This todo is done")).toBeDefined();
  });

  test("shows set as done button when incomplete", () => {
    render(
      <TodoItem
        todo={todo}
        deleteTodo={mockDeleteTodo}
        completeTodo={mockCompleteTodo}
      />,
    );
    expect(screen.getByText("Set as done")).toBeDefined();
  });

  test("does not show set as done button when complete", () => {
    render(
      <TodoItem
        todo={doneTodo}
        deleteTodo={mockDeleteTodo}
        completeTodo={mockCompleteTodo}
      />,
    );
    expect(screen.queryByText("Set as done")).toBeNull();
  });

  test("clicking delete calls deleteTodo callback", () => {
    render(
      <TodoItem
        todo={todo}
        deleteTodo={mockDeleteTodo}
        completeTodo={mockCompleteTodo}
      />,
    );
    fireEvent.click(screen.getByText("Delete"));
    expect(mockDeleteTodo).toHaveBeenCalledWith(todo);
  });

  test("clicking set as done calls completeTodo callback", () => {
    render(
      <TodoItem
        todo={todo}
        deleteTodo={mockDeleteTodo}
        completeTodo={mockCompleteTodo}
      />,
    );
    fireEvent.click(screen.getByText("Set as done"));
    expect(mockCompleteTodo).toHaveBeenCalledWith(todo);
  });
});
