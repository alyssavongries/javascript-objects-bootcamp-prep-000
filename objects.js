var playlist = {ColterWall: "Blacktop", LianneLaHavas: "Green & Gold"};

function updatePlaylist(newPlaylist,artist,song) {
  Object.assign({newPlaylist}, playlist, {[artist]: song})
  return newPlaylist
}