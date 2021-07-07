class User{
  static all = []
  constructor({username, id}){
    this.username = username
    this.id = id
    User.all.push(this)
    this.playlistApi = new PlaylistApi
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
    if (!this.id) return
     let p = Playlist.all.filter(playlist => playlist.owner_id === this.id)
    //  console.table(p)
    return p
    // console.log(`${playlist.owner_id}-${this.id}`)
      
    //   console.log(this.id)
    // return playlist.owner_id === this.id          
  }
  //welcome User

  render(){
    document.getElementById("username").innerHTML =`
    <div id= "username-${this.username}">
        <h2>Welcome, ${this.username}</h2>
        <h3> Playlists: </h3>
        <ul id="user-playlists"></ul> 
    </div>
    `
  
    // console.log(id)
    this.findPlaylistsByOwnerId().forEach(playlist => {
      // console.log(playlist)
      const li = document.createElement("li")
      const a = document.createElement("a")
      const ul = document.createElement("ul")
      a.innerText = playlist.name     
      a.addEventListener("click", e => { 
        // console.log(e)
        ul.innerText = ""
      this.playlistApi.displaySongs(playlist.id)
      .then(songs => {
        songs.forEach(s => {
          console.log(s.title)        
          ul.innerText = s.title + "," + " " + "by" + " " + s.artists
          li.appendChild(ul)
        })
        
      })
      //  console.log(songs)
      })
      li.appendChild(a)
      document.getElementById("user-playlists").appendChild(li)

      // debugger
    })

    }//user playlist displays here
  
  

  // displaySongs(id){
  //   // console.log(id) 
  //   fetch
  // }

  // render(){
  //   document.getElementById("playlist-list").innerHTML =`
  //   <div
  //   `
  // }

  // logout function might make sense but not really required


}