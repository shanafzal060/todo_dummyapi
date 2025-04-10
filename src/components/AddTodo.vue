<template>
  <v-form>
    <v-container fluid class="bg-grey-lighten-4">
      <v-row>
        <v-col>
          <div class="text-h4">Add New Todo</div>
          <v-form @submit.prevent="onSubmit">
            <v-text-field
              v-model="title"
              label="Add Todo"
              :rules="[rules.required, rules.counter, rules.ifNum]"
              clearable
              autofocus
            ></v-text-field>
            <v-btn :loading="loading" type="submit" color="green"
              >Add Todo
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const loading = ref(false);
const title = ref("");
const store = useStore();

const onSubmit = () => {
  //show loader
  loading.value = true;

  if (typeof title.value === Number) {
    console.log("please enter a valid title");
  } else {
    store.dispatch("todos/addTodo", title.value);
  }

  setTimeout(() => {

    //hide loader
    loading.value = false;

    //text field empty
    title.value = "";
  }, 1000);
};

const rules = {
  required: (value) => !!value || "Required.",
  counter: (value) => value.length <= 20 || "Max 20 characters",
  ifNum: (value) => isNaN(Number(value)) || "It should not be a number",
};
</script>

<style scoped></style>
