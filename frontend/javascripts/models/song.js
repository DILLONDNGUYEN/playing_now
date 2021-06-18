class Song{
  static all = []
  constructor({title, album_name, popularity, artists, duration}){
    this.title = title
    this.album_name = album_name
    this.popularity = popularity
    this.artists = artists
    this.duration = duration
    Song.all.push(this)
  }
  
}
