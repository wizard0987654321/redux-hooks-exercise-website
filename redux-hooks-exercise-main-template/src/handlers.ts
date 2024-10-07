import { inputAdded, clearStrings, removeString } from './firstSlice';
import { useAppDispatch } from './app/hooks';
import { useCallback } from 'react';

export const useHandlers = (inputValue: string, setInputValue: React.Dispatch<React.SetStateAction<string>>) => {
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(() => {
    console.log(inputValue);
    dispatch(inputAdded(inputValue));
    setInputValue('');
  }, [dispatch, inputValue, setInputValue]);

  const handleClearStrings = useCallback(() => {
    dispatch(clearStrings());
  }, [dispatch]);

  const handleRemoveString = useCallback(() => {
    dispatch(removeString(inputValue));
    console.log('String to remove is ' + inputValue)
  }, [dispatch, inputValue]);

  return {
    handleSubmit,
    handleClearStrings,
    handleRemoveString,
  };
};
