import { Tutorial } from "../models/tutorials.model";
import * as TutorialActions  from '../actions/tutorials.actions';


const initialState : Tutorial = {
    name : 'Ami Patel',
    contact : '98563257441'
}
export function reducer(state : Tutorial[] = [initialState],action:TutorialActions.Actions){
    switch(action.type){
        case TutorialActions.Add_Tutorial:
            console.log("action",action);
            console.log("My payload",action.payload);
            console.log("state",state);
            return [...state,action.payload]
        case TutorialActions.Remove_Tutorial:
            state.splice(action.payload,1);
            return state;
        default:
            return state;
    }
}