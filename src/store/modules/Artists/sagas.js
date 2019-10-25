import { all, put, call, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { getArtistsSuccess, getTracksSuccess } from './actions';

export function* getArtist({ payload }) {
  try {
    api.defaults.headers.Authorization = `Bearer ${process.env.REACT_APP_API_KEY}`;
    const { ids } = payload;
    const response = yield call(api.get, `/artists`, { params: { ids } });
    const { artists } = response.data;
    const arrayIds = ids.split(',');
    const tracks = [];

    const responses = yield all(
      arrayIds.map(id => {
        return call(api.get, `/artists/${id}/top-tracks`, {
          params: {
            country: 'BR',
          },
        });
      })
    );

    yield responses.map(responseTracks =>
      tracks.push(...responseTracks.data.tracks)
    );
    const data = { tracks, artists };
    yield put(getArtistsSuccess(data));
  } catch (err) {
    console.log(err);
  }
}

export function* getTracks({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(api.get, `/albums/${id}/tracks`);
    console.tron.log(response.data);
    const tracks = response.data.items;

    yield put(getTracksSuccess(tracks));
  } catch (error) {
    console.tron.log(error);
  }
}

export default all([
  takeLatest('@artists/GET_REQUEST', getArtist),
  takeLatest('@artists/GET_TRACKS_REQUEST', getTracks),
]);
