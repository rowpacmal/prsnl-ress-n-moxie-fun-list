import AddListItem from './AddListItem';

const ContentList = ({ name, list }) => {
  return (
    <section>
      <h2>{name}</h2>
      <AddListItem name={name} />
      <ul>
        {list.length > 0 ? (
          list.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })
        ) : (
          <li>No Items</li>
        )}
      </ul>
    </section>
  );
};

export default ContentList;
