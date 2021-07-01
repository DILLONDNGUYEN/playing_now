class Playlist{
  static all = []  
  constructor({name, description, owner_id, id}){
    this.name = name
    this.description = description
    this.owner_id = owner_id
    this.id = id
    Playlist.all.push(this)
  }
  findSongsInPlaylist(){
    return Song.all.filter(song => song.playlistIds.includes(this.id))
  }
  static findOrCreatePlaylist(playlist){
    return this.findByOwnerId(playlist.id) || new Playlist(playlist)
  }
  static findByOwnerId(id){
    return this.all.find(function(id){
      playlist.id=== id   
    })
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