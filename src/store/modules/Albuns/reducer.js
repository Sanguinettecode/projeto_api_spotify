import { produce } from 'immer';

const INITIAL_STATE = {
  color: '',
  albums: [],
  loading: false,
};
export default function albuns(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@albums/GET_SUCCESS': {
        draft.albums = action.payload.albums;
        draft.color = action.payload.color;
        break;
      }
      default:
    }
  });
}
