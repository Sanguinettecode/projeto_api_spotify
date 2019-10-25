import React, { useState, useMemo, useRef } from 'react';
import Chart from 'chart.js';
import { useSelector, useDispatch } from 'react-redux';
import { format, subYears, addYears, parseISO } from 'date-fns';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Container, Search, Selector, Period, PanelGraf } from './styles';
import { getAlbunsRequest } from '../../store/modules/Albuns/actions';
import { getTracksRequest } from '../../store/modules/Artists/actions';

export default function Panel() {
  const [date, setDate] = useState(new Date());
  const color = useSelector(state => state.Albuns.color);
  const formatDate = useMemo(() => format(date, 'yyyy'));
  const artists = useSelector(state => state.Artists.artists);
  const dispatch = useDispatch();
  const Chartref = useRef();
  const albums = useSelector(state => state.Albuns.albums);
  const dataFormated = albums.map(album => ({
    year: format(parseISO(album.release_date), 'yyyy'),
    tracks: album.total_tracks,
  }));
  let myChart = [];
  if (Chartref.current) {
    myChart = new Chart(Chartref.current, {
      type: 'bar',
      data: {
        labels: dataFormated.reverse().map(data => data.year),
        datasets: [
          {
            label: 'Album x #Tracks',
            data: dataFormated.map(data => data.tracks),
            backgroundColor: color,
          },
        ],
      },
      options: {
        events: ['click', 'mousemove'],
        legend: {
          display: false,
        },

        hover: {
          onHover(e) {
            // eslint-disable-next-line react/no-this-in-sfc
            const point = this.getElementAtEvent(e);
            if (point.length) e.target.style.cursor = 'pointer';
            else e.target.style.cursor = 'default';
          },
        },
        onClick(e) {
          const activePoints = myChart.getElementsAtEvent(e);
          if (activePoints.length > 0) {
            // eslint-disable-next-line no-underscore-dangle
            const clickedElementindex = activePoints[0]._index;
            dispatch(getTracksRequest(albums[clickedElementindex].id));
          }
        },
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 30,
              },
            },
          ],
        },
      },
    });
  }
  function handleChange(e) {
    myChart.destroy();
    dispatch(getAlbunsRequest(e.target.value));
  }
  function handleSubYear() {
    setDate(subYears(date, 1));
  }
  function handleAddYear() {
    setDate(addYears(date, 1));
  }
  return (
    <Container>
      <Search>
        <h3>Filtro dos artistar</h3>
        <div>
          <Selector>
            <select onChange={handleChange}>
              <option value={null} readOnly>
                Selecionar
              </option>
              {artists.map(artist => (
                <option key={artist.id} value={artist.id}>
                  {artist.name}
                </option>
              ))}
            </select>
          </Selector>
          <Period>
            <button type="button" onClick={handleSubYear}>
              <MdChevronLeft color="#333" />
            </button>
            <input type="text" value={formatDate} />
            <button type="button" onClick={handleAddYear}>
              <MdChevronRight color="#333" />
            </button>
          </Period>
        </div>
      </Search>
      <PanelGraf>
        <h3>Painel de albuns</h3>
        <div>
          <canvas ref={Chartref} />
        </div>
      </PanelGraf>
    </Container>
  );
}
