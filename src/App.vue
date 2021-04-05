<template>
  <todo-window></todo-window>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TodoWindow from "./components/TodoWindow.vue";

@Options({
  components: {
    TodoWindow,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
body {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      178.82deg,
      #6a82fb 0.99%,
      rgba(252, 92, 125, 0.31) 103.24%
    ),
    #ffffff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
