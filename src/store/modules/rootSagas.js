import { all } from 'redux-saga/effects';
import Albuns from './Albuns/sagas';

import Artists from './Artists/sagas';

export default function* rootSaga() {
  return yield all([Albuns, Artists]);
}
