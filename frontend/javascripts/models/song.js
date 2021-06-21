class Song{
  static all = []
  constructor({title, album_name, popularity, artists, duration, id}){
    this.title = title
    this.album_name = album_name
    this.popularity = popularity
    this.artists = artists
    this.duration = duration
    this.id = id
    this.playlistIds = []
    Song.all.push(this)
  }
  static findOrCreateSong(song){                                                
    this.findByTitle(song.title)|| new Song(song)
  } 
  static findByTitle(title){
    return this.all.find(song=> song.title === title)
  }
  static findAllByTitle(title){
        const formattedTitle= title.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1) ).join(" ")
        return this.all.filter(song=> song.title.startsWith(formattedTitle))
            
    }
}

