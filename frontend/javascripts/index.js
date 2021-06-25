const playlistContainer = document.getElementById('playlist-container')
const playlist = document.getElementById('playlist')
const song = document.getElementById('song')


document.addEventListener("DOMContentLoaded", () =>{
  SongApi.fetchSongs()
  document.querySelector("#searchWrapper > input[type=text]").addEventListener("keyup", Song.searchSongs)
  
  UserApi.fetchUsers()
  PlaylistApi.fetchPlaylists()
})