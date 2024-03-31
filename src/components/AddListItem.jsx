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
      className="form"
    >
      <input
        type="text"
        placeholder="Add new item..."
        value={textInput}
        onChange={(e) => {
          setTextInput(e.target.value);
        }}
      />
      <div>
        <button>
          <span className="align-icon">
            <IconPlus />
            Add
          </span>
        </button>
      </div>
    </form>
  );
};

export default AddListItem;
