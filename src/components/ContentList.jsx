import {
  IconClipboard,
  IconSquare,
  IconSquareCheckFilled,
  IconX,
} from '@tabler/icons-react';
import AddListItem from './AddListItem';
import { useContext } from 'react';
import { ItemContext } from '../context/Context';

const ContentList = ({ name, list }) => {
  const { completeListItem, removeListItem } = useContext(ItemContext);

  return (
    <section>
      <h2>
        <IconClipboard />
        {name}
      </h2>
      <AddListItem name={name} />
      <div className="list-wrapper">
        <ul className="list">
          {list.length > 0 ? (
            list.map((item) => {
              return (
                <li key={item.id}>
                  <p className={item.isDone ? 'done' : ''}>
                    {item.title === '' ? 'NO TITLE FOUND' : item.title}
                  </p>

                  <div className="btn-wrapper">
                    <button
                      onClick={() => {
                        completeListItem(name, item.id);
                      }}
                    >
                      {item.isDone ? <IconSquareCheckFilled /> : <IconSquare />}
                    </button>

                    <button
                      onClick={() => {
                        removeListItem(name, item.id);
                      }}
                    >
                      <IconX />
                    </button>
                  </div>
                </li>
              );
            })
          ) : (
            <li>No Items</li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default ContentList;
