import { createContext, useContext } from "react";

export const TodoContext = createContext({});

export const UseTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider();
