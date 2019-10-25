import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Panel from '../../components/Panel';
import Musics from '../../components/Musics';
import { Container } from './styles';
import { getArtistsRequest } from '../../store/modules/Artists/actions';

export default function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function loadData() {
      const artistsIds =
        '19XpD8usAYOdO3hwmQ06i4,3pICQ7QvYXozuzJjgb6eM5,2TbBb2QPTrPEbQ6yacOc7K,313wZXuksG2rnaLJz9HMWu,43E34kSYGZckKsI27VS5a2';

      dispatch(getArtistsRequest(artistsIds));
    }
    loadData();
  }, []);
  return (
    <Container>
      <Panel />
      <Musics />
    </Container>
  );
}
