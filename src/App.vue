<template>
  <v-app>
    <v-main>
      <AddTodo />
      <FilterTodo />
      <ShowTodos />
    </v-main>
  </v-app>
</template>

<script>
import ShowTodos from "@/components/ShowTodos.vue";
import AddTodo from "@/components/AddTodo.vue";
import FilterTodo from "@/components/FilterTodos.vue";
export default {
  name: "App",
  components: {
    ShowTodos,
    AddTodo,
    FilterTodo,
  },
};
</script>

<style></style>
