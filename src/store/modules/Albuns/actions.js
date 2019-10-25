export function getAlbunsRequest(id) {
  return {
    type: '@albums/GET_REQUEST',
    payload: { id },
  };
}

export function getAlbunsSuccess(albums, color) {
  return {
    type: '@albums/GET_SUCCESS',
    payload: { albums, color },
  };
}
