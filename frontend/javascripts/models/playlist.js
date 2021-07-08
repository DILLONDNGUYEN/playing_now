class Playlist{
  static all = []  
  constructor({name, description, owner_id, id}){
    this.name = name
    this.description = description
    this.owner_id = owner_id
    this.id = id
    Playlist.all.push(this)
    this.playlistApi = new PlaylistApi
  }
  findSongsInPlaylist(){
    return Song.all.filter(song => song.playlistIds.includes(this.id))
  }
  static findOrCreatePlaylist(playlist){
    return this.findByOwnerId(playlist.id) || new Playlist(playlist)
  }
  static findByOwnerId(id){
    return this.all.find(function(playlist){
      playlist.id === id   
    })
  }
  render(){
    document.getElementById("playlist-list").innerHTML = `
    <div id= "playlist-${this.name}">
      <h3 class="playlist-name"> <a href='#'> ${this.name}</a> </h3>

    </div>
    `
  }
  static findById(playlist_id){
    return this.all.find(function(playlist){
    return playlist.id === playlist_id
    })
  }


    static addDisplayPlaylistOnClick(e){
    const div = document.createElement("div")
    document.querySelector("#search-wrapper").appendChild(div)
    const playlistAnchors = Playlist.all.map(playlist =>{
      const formatId = `playlist-${playlist.id}`
      const a = document.createElement("a")
      debugger
      a.innerText = playlist.name
      a.href="#"
      a.id = formatId
      div.innerHTML += a
      a.addEventListener("click", () => playlist.addSongToPlaylist())
      
    })
    // debugger
    
    
    // debugger
      
     
      
     
  }

  
  
//uses playlist-list-container and playlist-list

//Need to give the ability to add songs into a playlist

// addSongtoPlaylist(){

// }


 //Needs to be able to take in a song and display the song in such playlist

// deleteSongsfromPlaylist(){

// }


//might need crud functionality for deleting songs from the playlist

}