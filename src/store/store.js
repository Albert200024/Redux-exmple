import {applyMiddleware, combineReducers, createStore} from "redux"

import { cuurrentUserReducer, initlCurrentUser} from "./features/currentUser/currentUserSlice";
import { todosReducer, iitialTodos } from "./features/todos/todosSlice";
import {ingrimentCounterReducer, initCounter} from "./features/counter/newCounter";
import { fetchReducer, iitialFetch, fetchUsers} from "./fetchRe/fetch1";
import { fetchReducer2,  iitialFetch2, fetchUsers2} from "./fetchRe/fetch2";
import { fetchReducer3, iitialFetch3, fetchDtata } from "./fetchRe/fetch3";
import thunk from "redux-thunk"

const store = createStore(combineReducers({
      todos: todosReducer,
      currentUser: cuurrentUserReducer,
      counter:ingrimentCounterReducer,
      fetch1: fetchReducer,
      fetch2: fetchReducer2,
      fetch3:fetchReducer3
}), {
    todos: iitialTodos, 
    currentUser: initlCurrentUser,
    counterInit: initCounter,
    initalStateFetch:iitialFetch,
    initFetch2:iitialFetch2,
    initFetch3:iitialFetch3
}, applyMiddleware(thunk));

store.dispatch(fetchUsers())
store.dispatch(fetchUsers2())
store.dispatch(fetchDtata())

export default store
