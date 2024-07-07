import { createStore } from 'vuex'
// Create a new store instance.
const store = createStore({
    state() {
        return {
            workouts: null,
            user: null,
            LoginEmail: null,
            LoginPassword: null,
            SingupEmail: null,
            SignupPassword: null,
            ErrorAuth: null,
            ErrorSingUp: null,
            ShowErrorLogin: false,
            ShowErrorSignup: false,
            error: null,
            isError: false,
            todos: [],
            updates: null,
            isComplete: false,
            showinp: false,
            newtodo: null
        }
    },
    mutations: {
        todo(state) {
            if (localStorage.getItem('todo')) {
                try {
                    state.todos = JSON.parse(localStorage.getItem('todo'));
                } catch (e) {
                    localStorage.removeItem('todo');
                }
            }
        },
        addtodo(state) {
            // ensure they actually typed something
            if (!state.newtodo) {
                return;
            }
            const todos = !localStorage.getItem('todo')
                ? []
                : JSON.parse(localStorage.getItem('todo'))

            const currectTodo = {
                todo: state.newtodo,
                isComplete: state.isComplete
            }

            todos.push(currectTodo)
            localStorage.setItem("todo", JSON.stringify(todos))
            if (localStorage.getItem('todo')) {
                try {
                    state.todos = JSON.parse(localStorage.getItem('todo'));
                } catch (e) {
                    localStorage.removeItem('todo');
                }
            }
            state.newtodo = ''
        },
        removetodo(state, x) {
            state.todos.splice(x, 1);
            const parsed = JSON.stringify(state.todos);
            localStorage.setItem('todo', parsed);
        }
    },
    actions: {
        todo(context) {
            context.commit('todo')
        },
        addtodo(context) {
            context.commit('addtodo')
        },
        removetodo(context) {
            context.commit('removetodo')
        }
    }
})

export default store