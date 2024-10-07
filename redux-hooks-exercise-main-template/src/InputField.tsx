import React, { useEffect } from 'react';

interface InputFieldProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange, onSubmit, inputRef }) => {

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter text"
        ref={inputRef}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default InputField;
