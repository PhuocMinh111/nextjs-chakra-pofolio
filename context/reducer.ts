import { TOGGLE_COLOR_MODE } from "./actions";
import type { ReducerAction } from "react";
import { AppState } from "@/interface/interface";

const reducer = (
  state: AppState,
  action: { type: String; payload?: any }
): AppState => {
  switch (action.type) {
    case TOGGLE_COLOR_MODE:
      return { ...state, lightMode: !state.lightMode };

    default:
      return state;
  }
};

export default reducer;
