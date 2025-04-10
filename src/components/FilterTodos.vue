<template>
  <v-select
    label="Filter"
    :items="items"
    v-model="selectedItem"
    @update:modelValue="filter"
  ></v-select>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const items = ref(["100", "50", "10", "5"]);
const selectedItem = ref(null);

const filter = (value) => {
  value= parseInt(value);
  store.dispatch('todos/filterTodo',value)
}
</script>

<style scoped></style>
