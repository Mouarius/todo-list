import { FilterValue, Todo } from "@/types";

import { reactive } from "@vue/reactivity";

const initialTodos: Todo[] = [
  { id: 1, done: false, content: "Laver la vaisselle" },
  { id: 2, done: true, content: "Laver le chat" },
];

const initialFilter: FilterValue = "all" as FilterValue;

const store = {
  debug: true,

  state: reactive({
    todos: initialTodos,
    filterValue: initialFilter,
  }),

  addTodoAction(todo: Todo) {
    this.state.todos.push(todo);
  },
  removeTodoAction(id: number) {
    for (let i = 0; i < this.state.todos.length; i++) {
      const todo = this.state.todos[i];
      if (todo.id === id) {
        this.state.todos.splice(i, 1);
      }
    }
  },
  toggleTodoDoneAction(id: number) {
    this.state.todos.forEach((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
    });
  },
  findTodo(id: number): Todo | undefined {
    return this.state.todos.find((todo) => todo.id === id);
  },
  swapTodos(source_id: number, target_id: number) {
    const sourceIndex = this.state.todos.findIndex(
      (todo) => todo.id === source_id
    );
    const targetIndex = this.state.todos.findIndex(
      (todo) => todo.id === target_id
    );

    [this.state.todos[sourceIndex], this.state.todos[targetIndex]] = [
      this.state.todos[targetIndex],
      this.state.todos[sourceIndex],
    ];
  },
  setFilterValueAction(value: FilterValue) {
    this.state.filterValue = value;
  },
};

export default store;
