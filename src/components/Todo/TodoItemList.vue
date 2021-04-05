<template>
  <ul class="todo-item-list">
    <transition-group name="fade">
      <todo-item
        v-for="todo in todos"
        :key="todo.id"
        v-bind="todo"
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
