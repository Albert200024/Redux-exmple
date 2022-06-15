import axios from "axios"

export const iitialFetch3 = {
    loading:false,
    data:[],
    error:""
}

const reuest_Loading = () => {
    return {
        type:"Loading-Reg"
    }
}

const request_Sucsses = (data) => {
     return {
         type:"Sucsses-Reg",
         payload: data
     }
}

const Error = (err) => {
    return {
        type:"Error-Reg",
        payload:err
    }
}

export const fetchReducer3 = (state = {}, action) => {
    switch (action.type) {
        case 'Loading-Reg':
            return {
                ...state,
                loading:true,
                data:[],
                error:""
            }
        case 'Sucsses-Reg':
            return {
                ...state,
                loading:false,
                data:action.payload,
                error:""
            }
        case "Error-Reg":
           return{
              ...state,
              loading:true,
              data:[],
              error:action.payload
           }
        default:
            return state
    }
}

export const fetchDtata = () => {
    return function(dispatch){
          dispatch(reuest_Loading())
          axios.get("https://api.fda.gov/food/enforcement.json?limit=10")
          .then(response => dispatch(request_Sucsses(response.data.results)))
          .catch(response => dispatch(Error("sxal hasce")))
    }
}

