import React, { useState, useRef } from 'react';
import './App.css';
import { useHandlers } from './handlers';
import InputField from './InputField';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const { handleSubmit, handleClearStrings, handleRemoveString } = useHandlers(inputValue, setInputValue);

  return (
    <>
      <InputField
        value={inputValue}
        onChange={setInputValue}
        onSubmit={handleSubmit}
        inputRef={inputRef}
      />
      <button className=" m-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-2" onClick={handleClearStrings}>Clear Strings</button>
      <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-2" onClick={handleRemoveString}>Remove this Input</button>
    </>
  );
};

export default App;
