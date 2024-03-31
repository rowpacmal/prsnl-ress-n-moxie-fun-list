import './assets/styles/style.css';
import { useState, useEffect } from 'react';
import PantryService from './services/PantryService';
import ContentList from './components/ContentList';
import { ItemContext } from './context/Context';
import { IconBuildingCarousel, IconDeviceFloppy } from '@tabler/icons-react';

const App = () => {
  const defaultList = {
    games: [],
    anime: [],
    movies: [],
    tvShows: [],
  };

  const [list, setList] = useState(defaultList);
  const [savedList, setSavedList] = useState(defaultList);

  useEffect(() => {
    const getList = async () => {
      const newList = await PantryService.getList();
      setList(newList);
      setSavedList(newList);
    };
    getList();
  }, []);

  const createListItem = (name, title) => {
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

  const completeListItem = (name, id) => {
    const newList = { ...list };
    const toggleItem = (item) => {
      if (item.id === id) item.isDone = !item.isDone;
    };

    switch (name) {
      case 'Games':
        newList.games.forEach((item) => toggleItem(item));
        break;

      case 'Anime':
        newList.anime.forEach((item) => toggleItem(item));
        break;

      case 'Movies':
        newList.movies.forEach((item) => toggleItem(item));
        break;

      case 'TV Shows':
        newList.tvShows.forEach((item) => toggleItem(item));
        break;

      default:
        break;
    }

    setList(newList);
  };

  const removeListItem = (name, id) => {
    const newList = { ...list };
    const removeItem = (item) => item.id !== id;

    switch (name) {
      case 'Games':
        newList.games = newList.games.filter((item) => removeItem(item));
        break;

      case 'Anime':
        newList.anime = newList.anime.filter((item) => removeItem(item));
        break;

      case 'Movies':
        newList.movies = newList.movies.filter((item) => removeItem(item));
        break;

      case 'TV Shows':
        newList.tvShows = newList.tvShows.filter((item) => removeItem(item));
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
      <header className="header">
        <h1 className="align-icon">
          <IconBuildingCarousel size={'3.2rem'} /> Ress & Moxie{' '}
          <IconBuildingCarousel size={'3.2rem'} />
        </h1>
        <div>
          <button onClick={saveList}>
            <span className="align-icon">
              <IconDeviceFloppy />
              Save All
            </span>
          </button>
          <p>
            {savedList === list ? (
              <span className="saved">Everything is up to date!</span>
            ) : (
              <span className="unsaved">
                New changes has not been saved yet...
              </span>
            )}
          </p>
        </div>
      </header>

      <main className="main">
        <ItemContext.Provider
          value={{ createListItem, completeListItem, removeListItem }}
        >
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
        </ItemContext.Provider>
      </main>

      <footer className="footer">
        <p>Rowel Malmström &copy; 2024 </p>
      </footer>
    </>
  );
};

export default App;
