const playlistContainer = document.getElementById('playlist-container')
const playlist = document.getElementById('playlist')
const song = document.getElementById('song')


document.addEventListener("DOMContentLoaded", () =>{
  SongApi.fetchSongs()
})