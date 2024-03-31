import { useContext, useState } from 'react';
import { ItemContext } from '../context/Context';
import { IconPlus } from '@tabler/icons-react';

const AddListItem = ({ name }) => {
  const [textInput, setTextInput] = useState('');
  const { createListItem } = useContext(ItemContext);

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
      <button>
        <IconPlus />
        Add
      </button>
    </form>
  );
};

export default AddListItem;
