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
  
}