import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { MdSearch, MdFilterList } from 'react-icons/md';
import { Container, CardList, SearchMusic } from './styles';
import Card from './Card';

export default function Musics() {
  const [music, setMusic] = useState('');
  let tracks = useSelector(state => state.Artists.tracks);

  function handlerGetMusic(e) {
    setMusic(e.target.value);
  }

  if (music !== '') {
    tracks = tracks.filter(item => {
      const lc = item.name.toLowerCase();
      const filter = music.toLowerCase();
      return lc.includes(filter);
    });
  }

  return (
    <Container>
      <SearchMusic>
        <h3>Todas as músicas do artista</h3>
        <nav>
          <span>
            <MdSearch color="#333" size={20} />
          </span>
          <input
            type="text"
            placeholder="Buscar música"
            value={music}
            onChange={handlerGetMusic}
          />
          <MdFilterList color="#333" size={20} />
        </nav>
      </SearchMusic>
      <CardList>
        {tracks.map(track => (
          <Card key={track.id} track={track} />
        ))}
      </CardList>
    </Container>
  );
}
