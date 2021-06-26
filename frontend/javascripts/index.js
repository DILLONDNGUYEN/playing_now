const playlistContainer = document.getElementById('playlist-container')
const playlist = document.getElementById('playlist')
const song = document.getElementById('song')
const createUserForm = document.getElementById('create-user')
const newUserInput = document.getElementById('new-user')



document.addEventListener("DOMContentLoaded", () =>{
  console.log("lol")
  SongApi.fetchSongs()
    document.querySelector("#search-wrapper > input[type=text]").addEventListener("keyup", Song.searchSongs)

console.log(User)
  UserApi.fetchUsers()
    // document.querySelector("#new-user >input[type=text]").addEventListener("onsubmit", User.findOrCreateUser)
    createUserForm.addEventListener("submit", e => {
      e.preventDefault()
        User.findOrCreateUser(newUserInput)
        
    })
    // createUserForm.addEventListener("click", User.findOrCreateUser)

  PlaylistApi.fetchPlaylists()
})