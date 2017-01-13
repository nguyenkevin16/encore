export const tracksForUser = (tracks, userId) => {
  return Object.keys(tracks).map(trackId => {
    if (tracks[trackId].user_id === userId) {
      return tracks[trackId];
    }
  });
};
