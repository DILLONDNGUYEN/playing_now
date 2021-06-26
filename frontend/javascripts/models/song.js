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
        return this.all.filter(song => song.title.startsWith(formattedTitle))          
  }
  static searchSongs(e){
    e.preventDefault()
    if (e.target.value === "") return    
    document.getElementById("search-songs").innerHTML= ""
    const songs = Song.findAllByTitle(e.target.value)
    songs.forEach(song => song.render())
  }
  render(){
    document.getElementById("search-songs").innerHTML+=`
    <div id="song-${this.id}">

      <h3 class= "song-title"> <a href="#"> ${this.title}</a> </h3>
      <button id="plus" >
        <i class="fas fa-plus"></i>
      </button>
      
    </div>
    `  
  } 

}

