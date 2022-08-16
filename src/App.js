import './App.css';
import Header from './components/Header';
import Characters from './components/Characters';
import Search from './components/Search';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const hash = 'bd0722d5750b6362d5ba0212ca36726b';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetch = async () => {
      if (query === '') {
        const result = await axios(
          `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=344d40df0c8cc373141c1dc321fae9cf&hash=${hash}`,
        );
        console.log(result.data.data.results);
        setItems(result.data.data.results);
        setLoading(false);
      } else {
        const result = await axios(
          `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=344d40df0c8cc373141c1dc321fae9cf&hash=${hash}`,
        );
        console.log(result.data.data.results);
        setItems(result.data.data.results);
        setLoading(false);
        console.log(
          `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=344d40df0c8cc373141c1dc321fae9cf&hash=${hash}`,
        );
      }
    };
    fetch();
  }, [query]);
  return (
    <div className="container">
      <Header />
      <Search search={(q) => setQuery(q)}></Search>
      <Characters items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
