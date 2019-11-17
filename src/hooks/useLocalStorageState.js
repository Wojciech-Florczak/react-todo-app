import { useState, useEffect } from "react";

export default function useLocalStorageState(key, defaultVal) {
  // create state based off value in localstorage or based on default value
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      val = defaultVal;
    }
    return val;
  });

  // use useEffect to update localstorage hen state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
  return [state, setState];
}
