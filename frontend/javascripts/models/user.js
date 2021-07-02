class User{
  static all = []
  constructor({username, id}){
    this.username = username
    this.id =id
    User.all.push(this)
  }
  static findOrCreateUser(user){
    // debugger
    // console.log(newUserInput.value)
    return this.findByName(user.username)|| new User(user)
  }
  static findByName(username){
    return this.all.find(user=> user.name === username)
  }
  findPlaylistsByOwnerId(){
    return Playlist.all.filter(function(playlist){
    return playlist.owner_id === this.id   
    })
  }
  //welcome User

  render(){
    document.getElementById("username").innerHTML =`
    <div id= "username-${this.username}">
        <h4>Welcome ${this.username}</h4>
        <h3> Playlists: </h3>
        <ul id="user-playlists"></ul> 
    </div>
    `
    // debugger
    this.findPlaylistsByOwnerId().foreach(playlist => {
      const li = document.createElement("li")
      const a = document.createElement("a")
      a.innerText = playlist.name
      a.addEventListener("click",playlist.displaySongs)
      li.appendChild(a)
      document.getElementById("user-playlists").appendChild(li)
    })

    //user playlist displays here
  }

  // render(){
  //   document.getElementById("playlist-list").innerHTML =`
  //   <div
  //   `
  // }

  // logout function might make sense but not really required


}