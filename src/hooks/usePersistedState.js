import { useState, useEffect } from 'react';

function usePersistedState({ key, initialState }) {
  const [state, setState] = useState(() => {
    if (localStorage === undefined) {
      return initialState;
    }

    const localStorageValue = localStorage.getItem(key);

    if (localStorageValue) {
      return JSON.parse(localStorageValue);
    }

    return initialState;
  });

  // useEffect()

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
