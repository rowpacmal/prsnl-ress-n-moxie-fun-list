import { useState } from 'react';

const AddListItem = () => {
  const [textInput, setTextInput] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        value={textInput}
        onChange={(e) => {
          setTextInput(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default AddListItem;
