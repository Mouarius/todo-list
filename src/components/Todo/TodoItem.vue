<template>
  <li
    class="todo-item"
    :class="{ dragged: dragged, over: over }"
    draggable="true"
    @dragstart="startGrab"
    @dragend="endGrab"
    @dragover="onDragOver"
    @dragleave="endDragOver"
    @drop="handleDrop"
  >
    <input
      type="checkbox"
      name="`done_${id}`"
      :id="`done_${id}`"
      :checked="done"
      @change="toggleChecked"
    />
    <label :for="`done_${id}`" class="checkmark"
      ><span :class="{ done: done }" class="tick"></span
    ></label>
    <div class="content" :class="{ done: done }">{{ content }}</div>
    <button class="delete-button" @click="handleRemoveTodo"></button>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import store from "../../app/store";
export default defineComponent({
  props: ["id", "done", "content"],
  data() {
    return {
      dragged: false,
      over: false,
    };
  },
  computed: {},
  methods: {
    toggleChecked(e: MouseEvent) {
      e.preventDefault();
      console.log(`toggling ${this.id}`);
      store.toggleTodoDoneAction(this.id);
    },
    startGrab(e: DragEvent) {
      console.log("start grab");
      if (e.dataTransfer) {
        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("itemID", this.id);
        this.dragged = true;
      }
    },
    endGrab() {
      console.log("end grab");

      this.dragged = false;
    },
    onDragOver(e: DragEvent) {
      e.preventDefault();
      if (e.dataTransfer?.getData("itemID") !== this.id) {
        this.over = true;
      }
    },
    endDragOver(e: DragEvent) {
      e.preventDefault();
      this.over = false;
    },
    handleDrop(e: DragEvent) {
      e.stopPropagation();
      if (e.dataTransfer) {
        const itemID = parseInt(e.dataTransfer.getData("itemID"));
        store.swapTodos(this.id, itemID);
        this.over = false;
      }
      return false;
    },
    handleRemoveTodo() {
      store.removeTodoAction(this.id);
    },
  },
});
</script>

<style lang="scss">
.todo-item {
  background: rgb(246, 246, 249);
  padding: 8px;
  border-radius: 13px;
  margin-bottom: 13px;
  list-style: none;
  display: flex;
  align-items: center;
  transition: all 0.1s;
  box-sizing: border-box;
  border: solid 2px transparent;
}
.dragged {
  opacity: 0.4;
}
.over {
  border: solid 2px #0000fe;
}
input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f6f6f9;
  width: 20px;
  height: 20px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  box-shadow: inset -5px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  transition: all 0.2s;
  padding: 3px;
  &:hover {
    background: #e7e7eb;
  }
}
.tick {
  width: 100%;
  height: 100%;
  background: #0000fe;
  box-shadow: -5px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  opacity: 0;
  transform: scale(0);
  transition: all 0.1s;
  &.done {
    transform: scale(1);
    opacity: 1;
  }
}
.content {
  margin-left: 8px;
  flex-grow: 1;
  text-align: left;
  &.done {
    color: #999999;
    font-style: italic;
    text-decoration: line-through;
    font-weight: 200;
  }
}
button.delete-button {
  height: 15px;
  width: 15px;
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  background: no-repeat url("../../assets/cross-button.svg");
  flex-grow: 0;
  transition: all 0.1s;
  outline: none;
  &:hover {
    opacity: 0.4;
  }
}
</style>
