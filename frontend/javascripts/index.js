const playlistContainer = document.getElementById('playlist-container')
const playlist = document.getElementById('playlist')
const song = document.getElementById('song')
const createUserForm = document.getElementById('create-user')
const newUserInput = document.getElementById('new-user')
// let userApi = new UserApi()

//const thing = document.getElementById('name-container')

document.addEventListener("DOMContentLoaded", () =>{
  //Handles Songs
  SongApi.fetchSongs()
    document.querySelector("#search-wrapper > input[type=text]").addEventListener("keyup", Song.searchSongs)

  //Handles Users
  // console.log(User)
  // UserApi.fetchUsers()
    // document.querySelector("#new-user >input[type=text]").addEventListener("onsubmit", User.findOrCreateUser)

    createUserForm.addEventListener("submit", e => {
      e.preventDefault()
      
    // let username = userApi.createUser(newUserInput.value)
    UserApi.createUser(newUserInput.value)
    //  console.log(username)
      //thing.innerHTML = 
      // User.findOrCreateUser(newUserInput)
        
    })

    // createUserForm.addEventListener("click", User.findOrCreateUser)

    
//handles Playlists
  // PlaylistApi.fetchPlaylists()
})