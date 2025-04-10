<template>
  <v-container fluid class="bg-grey-lighten-2">
    <v-row
      ><v-col class="text-center text-h5 bg-pink-lighten-2 rounded my-2"
        >Todos</v-col
      ></v-row
    >
    <v-row
      ><v-col class="text-center text-body-1 text-green"
        >Double click to mark complete</v-col
      ></v-row
    >

    <v-row>
      <v-col
        cols="12"
        sm="4"
        md="3"
        lg="4"
        v-for="todo in todos"
        :key="todo.id"
      >
        <v-sheet
          @dblclick="todo.completed = !todo.completed"
          :class="{ changeColor: todo.completed }"
          class="position-relative text-body-1 text-center d-flex align-center justify-center bg-pink-lighten-4 text-white"
          :height="100"
          :width="auto"
          rounded
        >
          {{ todo.title }}
          <v-icon
            v-show="todo.completed"
            color="success"
            size="36"
            class="my-check position-absolute top=50%"
            >mdi-check</v-icon
          >
          <v-icon
            @click="deleteTodo(todo.id)"
            icon="mdi-delete"
            class="position-absolute bottom-0 right-0 pa-4"
            color="deep-orange-accent-4"
          ></v-icon>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

// Accessing getters
const todos = computed(() => store.getters["todos/allTodos"]);

//dispatching actions
const fetchTodos = () => store.dispatch("todos/fetchTodos");
fetchTodos();

// deleting todo through dispatching
const deleteTodo = (id) => store.dispatch("todos/deleteTodo", id);
</script>

<style scoped>
.changeColor {
  background-color: #66bb6a !important   ;
  color: aliceblue !important;
}
.my-check {
  background-color: #e6f4ea;
  border-radius: 50%;
  padding: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}
</style>
