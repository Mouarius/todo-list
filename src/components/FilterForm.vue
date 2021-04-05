<template>
  <form class="filter" @change="handleFilterChange">
    <div :class="{ checked: filterStatus === 'all' }" class="button">
      <label for="filter-all">All</label>
      <input
        type="radio"
        name="filter"
        id="filter-all"
        class="all"
        value="all"
      />
    </div>
    <div :class="{ checked: filterStatus === 'active' }" class="button">
      <label for="filter-active">Active</label>
      <input
        type="radio"
        name="filter"
        id="filter-active"
        class="active"
        value="active"
      />
    </div>
    <div :class="{ checked: filterStatus === 'completed' }" class="button">
      <label for="filter-completed">Completed</label>
      <input
        type="radio"
        name="filter"
        id="filter-completed"
        class="completed"
        value="completed"
      />
    </div>
  </form>
</template>

<script>
import store from "../app/store";
export default {
  name: "FilterForm",
  computed: {
    filterStatus() {
      return store.state.filterValue;
    },
  },
  methods: {
    handleFilterChange(e) {
      store.setFilterValueAction(e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  background: #f6f6f9;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .button {
    text-transform: uppercase;
    font-weight: 200;
    font-size: 10pt;
    cursor: pointer;
    color: #f6f6f9;
    border-radius: 9999px;
    transition: all 0.2s;
    border: 1px solid rgba(0, 0, 0, 0.15);
    color: rgba(0, 0, 0, 0.5);
    padding: 4px 10px;
    margin: 10px;

    input[type="radio"] {
      display: none;
    }
    label {
      cursor: pointer;
    }

    &:hover {
      transform: scale(1.02);
      box-shadow: 0px 0px 12px -5px rgba($color: #3333df, $alpha: 0.5);
    }
  }
  .checked {
    background: #0000fe;
    color: #f6f6f9;
  }
}
</style>
