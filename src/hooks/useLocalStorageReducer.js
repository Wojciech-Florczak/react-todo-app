import { useReducer, useEffect } from "react";

export default function useLocalStorageReducer(key, defaultVal, reducer) {
  // create state based off value in localstorage or based on default value
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      val = defaultVal;
    }
    return val;
  })

  // use useEffect to update localstorage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])
  return [state, dispatch];
}
