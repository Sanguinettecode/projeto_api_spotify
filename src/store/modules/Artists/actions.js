export function getArtistsRequest(ids) {
  return {
    type: '@artists/GET_REQUEST',
    payload: { ids },
  };
}
export function getArtistsSuccess(data) {
  return {
    type: '@artists/GET_SUCCESS',
    payload: { data },
  };
}

export function getTracksRequest(id) {
  return {
    type: '@artists/GET_TRACKS_REQUEST',
    payload: { id },
  };
}

export function getTracksSuccess(tracks) {
  return {
    type: '@artists/GET_TRACKS_SUCCESS',
    payload: { tracks },
  };
}
