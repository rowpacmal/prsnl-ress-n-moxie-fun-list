import { IconCheck, IconClipboard, IconX } from '@tabler/icons-react';
import AddListItem from './AddListItem';
import { useContext } from 'react';
import { ItemContext } from '../context/Context';

const ContentList = ({ name, list }) => {
  const { completeListItem, removeListItem } = useContext(ItemContext);

  return (
    <section className="section">
      <h2 className="align-icon">
        <IconClipboard size={'3.2rem'} />
        {name} List
      </h2>
      <AddListItem name={name} />
      <div className="list-wrapper">
        <ul className="list">
          {list.length > 0 ? (
            list.map((item) => {
              return (
                <li
                  key={item.id}
                  className="list-item"
                >
                  <div
                    onClick={() => {
                      completeListItem(name, item.id);
                    }}
                    className={'item-text' + (item.isDone ? ' done' : '')}
                  >
                    <div className="align-icon">
                      {item.isDone && (
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginRight: '0.15rem',
                          }}
                        >
                          <IconCheck />
                        </div>
                      )}{' '}
                      {item.title === '' ? '-- NO TITLE --' : item.title}
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={() => {
                        removeListItem(name, item.id);
                      }}
                      className="remove-btn"
                    >
                      <span className="align-icon">
                        <IconX />
                      </span>
                    </button>
                  </div>
                </li>
              );
            })
          ) : (
            <li>The list is empty. Please add a new item to this list...</li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default ContentList;
