export let initCounter = 0

const Ingriment = "add-value-counter"

export function ingrimentCounterReducer(state=0, action){
    switch (action.type) {
        case Ingriment:
             return state + action.payload.value
        default:
            return state
    }
}

export function actionFuncCounter(val){
    return {
        type:Ingriment,
        payload:{
            value: +val
        }
    }
}