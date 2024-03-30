import AddListItem from './AddListItem';

const ContentList = ({ name, list }) => {
  return (
    <section>
      <h2>{name}</h2>
      <AddListItem />
      <ul>
        {list.length > 0 ? (
          list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })
        ) : (
          <li>No Items</li>
        )}
      </ul>
    </section>
  );
};

export default ContentList;
