import React, { useReducer } from "react"
import { SpCtxWrapper } from "@contexts"
import { INITIAL_STATE, rootReducers } from "@sp-state"

const SpMainCtxWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducers, INITIAL_STATE)

  return (
    <SpCtxWrapper.Provider value={{ state, dispatch }}>
      {children}
    </SpCtxWrapper.Provider>
  )
}

export default SpMainCtxWrapper