import axios from "axios"

export const iitialFetch = {
    loadig:false,
    users:[],
    error:""
}

const REQUEST_LOAD = 'REQUEST_LOAD'
const REQUEST_SUCCESS = 'REQUEST_SUCCESS'
const REUEST_ERROR = 'REUEST_ERROR'


const requestLoading = () => {
    return {
        type:REQUEST_LOAD
    }
}  

const requestSuccess = (succses) => {
    return {
        type:REQUEST_SUCCESS,
        payload:succses
    }
}


export const fetchReducer = (state = {}, action) => {
    switch(action.type){
          case REQUEST_LOAD:
              return {
                  ...state,
                  loadig:true,
                  users:[]
              }
          case  REQUEST_SUCCESS:
              return {
                  ...state,
                  loadig:false,
                  users:action.payload
              }
           default: 
              return state   
    }
}

export const fetchUsers = () => {
    return function(dispatch){
        dispatch(requestLoading())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
              const user = response.data
              dispatch(requestSuccess(user))
        })
    }
}