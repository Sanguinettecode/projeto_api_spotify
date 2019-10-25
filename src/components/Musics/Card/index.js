import React from 'react';

import classify from '../../../assets/18.png';

import { Container, Meta, Title, Info } from './styles';

export default function Card({ track }) {
  return (
    <Container>
      <Meta>
        <span>Nº{track.id}</span>
        <span>Track #{track.track_number}</span>
      </Meta>
      <Title>{track.name}</Title>
      <Info>
        <span>
          {track.popularity <= 35
            ? 'Baixa popularidade'
            : track.popularity > 35 && track.popularity <= 65
            ? 'Popularidade média'
            : 'Alta popularidade'}
        </span>

        {track.explicit ? <img src={classify} alt="Classificação" /> : null}
      </Info>
    </Container>
  );
}
