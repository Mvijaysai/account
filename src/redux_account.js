import {
    createStore
} from 'redux'
//Action creators & actions
const DEPOSIT ='DEPOSIT';
const WITHDRAW = 'WITHDRAW';
export function deposit(){
    return {
        type:DEPOSIT
    }
}
export function withdraw(){
    return {
        type: WITHDRAW
    }
}
//Reducer
var account =(state=100,action)=>{
    console.log(JSON.stringify(action))
    switch(action.type){
        case DEPOSIT:
            return state+10;
         case WITHDRAW:
           return state-10;
           default:
               return state;
    }
}
//store
export const store = createStore(account);