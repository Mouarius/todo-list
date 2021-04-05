<template>
  <form @submit="handleTodoSubmit">
    <label for="new-todo">Enter something to do :</label>

    <div class="input-block">
      <input class="text-input" id="new-todo" type="text" v-model="newTodo" />
      <input class="button" type="submit" value="ADD" />
    </div>
  </form>
</template>

<script>
import store from "../app/store";
export default {
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    handleTodoSubmit(e) {
      e.preventDefault();
      if (this.newTodo) {
        const id = Math.max(...store.state.todos.map((todo) => todo.id)) + 1;
        console.log(id);
        const newTodo = {
          id: id,
          content: this.newTodo,
          done: false,
        };
        store.addTodoAction(newTodo);
        this.newTodo = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  padding: 18px;
  text-align: left;
}
label {
  font-size: 10pt;
  font-weight: 600;
  display: block;
}
.input-block {
  height: 30px;
  margin-top: 10px;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
}
.text-input {
  bottom: 15.5px;
  background: #f6f6f9;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  box-shadow: inset -4px 4px 4px rgba(0, 0, 0, 0.09);
  border-radius: 8px;
  flex-grow: 1;
  outline: none;
  padding: 8px;
  transition: all 0.08s;
  &:focus {
    box-shadow: inset -2px 2px 4px rgba(0, 0, 0, 0.09), 0px 0px 0px 2px #f6f6f9,
      0px 0px 0px 4px #0000fe;
  }
}
.button {
  border: none;
  cursor: pointer;
  outline: none;
  margin-left: 10px;
  padding: 0 10px;
  flex-grow: 0;
  font-weight: 200;
  font-size: 12pt;
  color: #f6f6f9;
  background: #0000fe;
  border-radius: 8px;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 12px -5px #3333df;
  }
}
</style>
