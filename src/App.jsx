import './assets/styles/App.css';
import { useState, useEffect } from 'react';
import PantryService from './services/PantryService';
import ContentList from './components/ContentList';

// console.log(await PantryService.addItem({ new: ['hej'] }));

const App = () => {
  const [list, setList] = useState({
    games: [],
    anime: [],
    movies: [],
    tvShows: [],
  });

  useEffect(() => {
    const getList = async () => {
      setList(await PantryService.getList());
    };
    getList();
  }, []);

  return (
    <>
      <ContentList
        name="Games"
        list={list.games}
      />

      <ContentList
        name="Anime"
        list={list.anime}
      />

      <ContentList
        name="Movies"
        list={list.movies}
      />

      <ContentList
        name="TV Shows"
        list={list.tvShows}
      />
    </>
  );
};

export default App;
