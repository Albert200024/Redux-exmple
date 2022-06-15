import { loadCurrentUser } from "./cuurentUserApi";

export function cuurrentUserReducer(state = {}, action){
    switch (action.type) {
        case "edit-current-user-name":
            return {
                   ...state,
                   name:action.payload.name
            }
    
        default:
            return state
    }
}

export const initlCurrentUser = {
    name:"Joe Shmoe"
}


export function editName(newName){
   return {
       type: "edit-current-user-name",
       payload : {
           name:newName
       }
   }
}

export function loadUser(){
    return (dsipatch, getState) => {
         return loadCurrentUser().then((loadeUser) => {
              dsipatch(editName(loadeUser.name))
         })        
    };
}