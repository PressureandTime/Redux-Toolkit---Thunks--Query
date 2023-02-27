import React from 'react';
import { useDispatch } from 'react-redux';

export default function useThunk(thunk) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const execute = React.useCallback(
    (...args) => {
      setIsLoading(true);
      dispatch(thunk(...args))
        .unwrap()
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false));
    },
    [thunk, dispatch]
  );

  return [execute, isLoading, error];
}
