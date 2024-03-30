import { useContext, useState } from 'react';
import AddItemContext from '../context/AddItemContext';

const AddListItem = ({ name }) => {
  const [textInput, setTextInput] = useState('');
  const createListItem = useContext(AddItemContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createListItem(name, textInput);
        setTextInput('');
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
