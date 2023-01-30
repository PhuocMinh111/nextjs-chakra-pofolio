import { AppState } from "@/interface/interface";
import React, { createContext, useReducer, useState, useContext } from "react";
import { SET_DARK_THEME, SET_LIGHT_THEME } from "./action";
import reducer from "./reducer";

const defaultValue: AppState = {
  lightMode: true,
  setDarkMode: () => {},
  setLightMode: () => {},
};

const AppContext = createContext<AppState>(defaultValue);

function AppProvider({ children }: any) {
  const [state, dispatch] = useReducer(reducer, defaultValue);
  const value: AppState = {
    lightMode: state.lightMode,
    setDarkMode: () => {
      console.log("dark");

      dispatch({ type: SET_DARK_THEME });
    },
    setLightMode: () => {
      dispatch({ type: SET_LIGHT_THEME });
    },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const UseContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
