import axios from "axios";

export const iitialFetch2 = {
    loading:false,
    users:[],
    error:""
}

const REQUEST_LOAD = 'REQUEST_LOAD'
const REQUEST_SUCCESS = 'REQUEST_SUCCESS'
const REUEST_ERROR = 'REUEST_ERROR'

const request_Loading = () => {
    return {
        type:REQUEST_LOAD
    }
}

const request_Success = (data) => {
    return {
        type : REQUEST_SUCCESS,
        payload: data
    }
}

const request_Error = (err) => {
    return {
        type:REUEST_ERROR,
        payload:err
    }
}

export const fetchReducer2 = (state = {}, action) => {
    switch(action.type){
          case REQUEST_LOAD:
              return {
                  ...state,
                  loadig:true,
                  users:[],
                  error:""
              }
          case  REQUEST_SUCCESS:
              return {
                  ...state,
                  loadig:false,
                  users:action.payload,
                  error:""
              }
          case REUEST_ERROR :
               return {
                   ...state,
                   loadig:true,
                   error: action.payload,
               }    
           default: 
              return state   
    }
}


export const fetchUsers2 = () => {
    return function(dispatch){
        dispatch(request_Loading())
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response => dispatch(request_Success(response.data)))
        .catch(response => dispatch(request_Error("sxal hasce")))
    }
}