import { all, put, call, takeLatest } from 'redux-saga/effects';
import { getAlbunsSuccess } from './actions';
import api from '../../../services/api';

export function* getAlbuns({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(api.get, `/artists/${id}/albums`, {
      params: {
        include_groups: 'album',
        market: 'BR',
        limit: 10,
      },
    });
    const color =
      id === '19XpD8usAYOdO3hwmQ06i4'
        ? '#8A2BE2'
        : id === '3pICQ7QvYXozuzJjgb6eM5'
        ? '#FF7F50'
        : id === '2TbBb2QPTrPEbQ6yacOc7K'
        ? '#FF1493'
        : id === '313wZXuksG2rnaLJz9HMWu'
        ? '#ADFF2F'
        : '#191970';

    yield put(getAlbunsSuccess(response.data.items, color));
  } catch (err) {
    console.tron.log(err);
  }
}

export default all([takeLatest('@albums/GET_REQUEST', getAlbuns)]);
