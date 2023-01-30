import { AppState } from "@/interface/interface";
import React, { createContext, useReducer, useState, useContext } from "react";
import { TOGGLE_COLOR_MODE } from "./actions";
import reducer from "./reducer";

const defaultValue: AppState = {
  lightMode: true,
  toggleColorMode: () => {},
};

const AppContext = createContext<AppState>(defaultValue);

function AppProvider({ children }: any) {
  const [state, dispatch] = useReducer(reducer, defaultValue);
  const value: AppState = {
    lightMode: state.lightMode,
    toggleColorMode: () => {
      dispatch({ type: TOGGLE_COLOR_MODE });
    },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const UseContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
