import { combineReducers } from 'redux';
import Albuns from './Albuns/reducer';
import Artists from './Artists/reducer';

export default combineReducers({ Albuns, Artists });
