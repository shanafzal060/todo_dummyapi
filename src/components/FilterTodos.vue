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

function filter(value) {
  value= parseInt(value);
  store.dispatch('filterTodo',value)
}
</script>

<style scoped></style>
