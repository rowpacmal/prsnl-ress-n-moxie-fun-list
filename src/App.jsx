import './assets/styles/App.css';
import { useState, useEffect } from 'react';
import PantryService from './services/PantryService';
import ContentList from './components/ContentList';
import AddItemContext from './context/AddItemContext';

const App = () => {
  const [list, setList] = useState({
    games: [],
    anime: [],
    movies: [],
    tvShows: [],
  });
  const [savedList, setSavedList] = useState();

  useEffect(() => {
    const getList = async () => {
      const newList = await PantryService.getList();
      setList(newList);
      setSavedList(newList);
    };
    getList();
  }, []);

  const createListItem = async (name, title) => {
    const newList = { ...list };
    const newObj = { id: Date.now(), title: title, isDone: false };

    switch (name) {
      case 'Games':
        newList.games.push(newObj);
        break;

      case 'Anime':
        newList.anime.push(newObj);
        break;

      case 'Movies':
        newList.movies.push(newObj);
        break;

      case 'TV Shows':
        newList.tvShows.push(newObj);
        break;

      default:
        break;
    }

    setList(newList);
  };

  const saveList = async () => {
    if (savedList !== list) {
      await PantryService.updateList(list);
      setSavedList(list);
    } else {
      console.log('NEJ');
    }
  };

  return (
    <>
      <AddItemContext.Provider value={createListItem}>
        <ContentList
          name="Games"
          list={list?.games}
        />

        <ContentList
          name="Anime"
          list={list?.anime}
        />

        <ContentList
          name="Movies"
          list={list?.movies}
        />

        <ContentList
          name="TV Shows"
          list={list?.tvShows}
        />

        <div>
          <button onClick={saveList}>Save All</button>
        </div>
      </AddItemContext.Provider>
    </>
  );
};

export default App;
