var playlist = {ColterWall: "Blacktop", LianneLaHavas: "Green & Gold"};

function updatePlaylist(playlist,artist,song) {
  Object.assign({playlist}, artist, song)
  return playlist
}