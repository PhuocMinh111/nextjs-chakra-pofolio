import { SET_DARK_THEME, SET_LIGHT_THEME } from "./action";
import type { ReducerAction } from "react";
import { AppState } from "@/interface/interface";

 

const reducer = (state:AppState,action:{type:String;payload?:any}):AppState => {
    switch (action.type) {
        case SET_DARK_THEME:
            return {...state,lightMode:false};
        case SET_LIGHT_THEME:
            return {...state,lightMode:true};
    
        default:
            return state;
    }
}

export default reducer;