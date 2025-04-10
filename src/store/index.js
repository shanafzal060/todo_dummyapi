import { createStore } from "vuex";
import todos from '@/store/modules/todo'

// Create a basic store
export default createStore({
 modules:{
    todos
 }
});
