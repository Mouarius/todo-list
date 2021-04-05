<template>
  <ul class="todo-item-list">
    <transition-group name="fade">
      <todo-item
        v-for="todo in filteredTodos"
        :key="todo.id"
        :id="todo.id"
        :content="todo.content"
        :done="todo.done"
        :handleChecked="toggleChecked"
      />
    </transition-group>
  </ul>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import store from "../../app/store";
export default {
  components: { TodoItem },
  data() {
    return {
      todos: store.state.todos,
    };
  },
  computed: {
    filteredTodos() {
      const filter = store.state.filterValue;
      if (filter === "completed") {
        return store.state.todos.filter((todo) => todo.done === true);
      } else if (filter === "active") {
        return store.state.todos.filter((todo) => todo.done === false);
      } else {
        return store.state.todos;
      }
    },
  },
  methods: {
    toggleChecked(id) {
      console.log(`checking ${id}`);
    },
  },
};
</script>

<style>
.todo-item-list {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 18px 15px;
  margin: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
