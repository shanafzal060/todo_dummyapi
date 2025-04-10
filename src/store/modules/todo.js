const state=()=>( {
    todos: [],
  })
 const getters= {
    allTodos: (state) => state.todos,
  }

 const mutations= {
    setTodos: (state, todos) => {
      state.todos = todos;
    },
    newTodo: (state, todo) => {
      state.todos.unshift(todo);
    },
    removeTodo: (state, id) => {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    result:(state,data)=>{
        state.todos = data
    }
  }
 const actions = {
    async fetchTodos({ commit }) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      commit("setTodos", data);
    },

    async addTodo({ commit }, title) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "POST",
          body: JSON.stringify({
            title: title,
            completed: false,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      commit("newTodo", data);
    },

    async deleteTodo({ commit }, id) {
      try {
        console.log(id);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${id}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          throw new Error(
            `Failed to delete todo with id ${id}: ${response.statusText}`
          );
        }

        commit("removeTodo", id);
      } catch (error) {
        console.error("Error deleting todo:", error);
      }
    },


    async filterTodo ({commit},limit){
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
        const data = await response.json()

        commit('result',data)
    }
  }

  export default {
    namespaced: true, // Enable namespacing
    state,
    getters,
    mutations,
    actions
  }
  