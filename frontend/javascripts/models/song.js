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
    this.playlistApi = new PlaylistApi
  }
  static findOrCreateSong(song){                                                
    return this.findByTitle(song.title)|| new Song(song)
  } 
  static findByTitle(title){
    return this.all.find(song => song.title === title)
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
    document.getElementById("plus").addEventListener("click", e => {
      const ul = document.createElement("ul")
      ul.innerText = ""
      let playlistSongs = document.querySelector("")
      this.playlistApi.findById(1, this.id)
      
      .then(data => {
        console.log(data.songs)
      
      })

    }) 
  } 
  
              //fetch call to the backend to add song to playlist
  // addSongToPlaylist(e){
  //       // debugger

  //          this.playlistApi.findById(playlistId, songId)
  //           }
             
      }
  
  

  // (title){


  // }



  // function addSongToPlaylist(s.target.value) {
  //   document.getElementById("plus").push(${this.title})
  // }

  //give the plus sign the ability to add songs to playlist
  //push(songs) into playlists or use unshift(songs)to put in beginning of playlists or maybe use splice, or slice or use concat

  // addSongToPlaylist(){
  //   //SongArray.concat
  // }

  // const Songs[
  //   "title 1",
  //   "title 2",
  //   "title 3",
  // ]
  // const Playlist [
  //   ...Songs
  //   "title 4"
  //   //^^^ the song the user adds to the playlist
  // ]
    


