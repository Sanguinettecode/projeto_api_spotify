import { produce } from 'immer';

const INITIAL_STATE = {
  artists: [],
  tracks: [],
  loading: false,
};
export default function artists(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@artists/GET_SUCCESS': {
        draft.artists = action.payload.data.artists;
        draft.tracks = action.payload.data.tracks;
        break;
      }
      case '@artists/GET_TRACKS_SUCCESS': {
        draft.tracks = action.payload.tracks;
        break;
      }
      default:
    }
  });
}
