<template>
  <div class="window">
    <header>
      <input-form />
    </header>
    <div class="todo-list">
      <todo-item-list />
    </div>
    <filter-form />
  </div>
</template>

<script>
import FilterForm from "./FilterForm.vue";
import InputForm from "./InputForm.vue";
import TodoItemList from "./Todo/TodoItemList";
export default {
  components: { InputForm, TodoItemList, FilterForm },
};
</script>

<style lang="scss">
.window {
  background: rgba(246, 246, 249, 0.5);
  border: 2px solid rgba(250, 250, 250, 0.47);
  box-sizing: border-box;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  /* Note: backdrop-filter has minimal browser support */
  overflow: hidden;
  border-radius: 0px 50px 50px 50px;
  width: 450px;
  height: 90vh;
}
.window header {
  background: rgb(246, 246, 249);
  flex-grow: 0;
}
.window .todo-list {
  flex-grow: 1;
}
</style>
